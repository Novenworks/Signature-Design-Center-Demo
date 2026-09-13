import { chromium } from 'playwright';
import fs from 'fs';

async function testQA() {
  const browser = await chromium.launch({ headless: true });
  const viewports = [
    { name: 'Desktop (1440px)', width: 1440, height: 900 },
    { name: 'Laptop (1024px)', width: 1024, height: 768 },
    { name: 'Tablet (768px)', width: 768, height: 1024 },
    { name: 'Mobile (390px)', width: 390, height: 844 },
  ];

  const results = [];

  for (const vp of viewports) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();
    const consoleErrors = [];
    const failedRequests = [];

    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    page.on('requestfailed', req => {
      failedRequests.push(`${req.method()} ${req.url()} - ${req.failure()?.errorText}`);
    });

    const response = await page.goto('http://localhost:3030/', { waitUntil: 'networkidle' });
    const status = response.status();

    // check horizontal overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    // check images
    const brokenImages = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs
        .filter(img => !img.complete || img.naturalWidth === 0)
        .map(img => img.src);
    });

    results.push({
      viewport: vp.name,
      width: vp.width,
      status,
      hasHorizontalOverflow,
      brokenImagesCount: brokenImages.length,
      brokenImages,
      consoleErrorsCount: consoleErrors.length,
      failedRequestsCount: failedRequests.length,
    });

    await context.close();
  }

  // Also test /outreach
  const outreachContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const outreachPage = await outreachContext.newPage();
  const outreachRes = await outreachPage.goto('http://localhost:3030/outreach', { waitUntil: 'networkidle' });
  const outreachBrokenImages = await outreachPage.evaluate(() => {
    return Array.from(document.querySelectorAll('img'))
      .filter(img => !img.complete || img.naturalWidth === 0)
      .map(img => img.src);
  });
  results.push({
    viewport: 'Outreach Route (1440px)',
    width: 1440,
    status: outreachRes.status(),
    hasHorizontalOverflow: false,
    brokenImagesCount: outreachBrokenImages.length,
    brokenImages: outreachBrokenImages,
    consoleErrorsCount: 0,
    failedRequestsCount: 0,
  });
  await outreachContext.close();

  await browser.close();
  console.table(results);
  fs.writeFileSync('docs/qa-results.json', JSON.stringify(results, null, 2));
}

testQA().catch(err => {
  console.error('QA script error:', err);
  process.exit(1);
});
