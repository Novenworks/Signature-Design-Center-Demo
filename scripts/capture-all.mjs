import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const outreachDir = path.resolve('public/outreach');
if (!fs.existsSync(outreachDir)) {
  fs.mkdirSync(outreachDir, { recursive: true });
}

async function captureAll() {
  console.log('Launching browser for captures...');
  const browser = await chromium.launch({ headless: true });

  // 1. BEFORE: Live Original Website Desktop Capture (1440px)
  console.log('1. Capturing BEFORE original site (https://ocremodel.com/)...');
  try {
    const beforeContext = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    });
    const beforePage = await beforeContext.newPage();
    await beforePage.goto('https://ocremodel.com/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    // wait a moment for images to settle
    await beforePage.waitForTimeout(4000);
    const beforeDest = path.join(outreachDir, 'before-original-desktop.png');
    await beforePage.screenshot({ path: beforeDest, fullPage: true });
    console.log(`✓ BEFORE captured: ${beforeDest} (${fs.statSync(beforeDest).size} bytes)`);
    await beforeContext.close();
  } catch (err) {
    console.error('Error capturing before site:', err.message);
  }

  // 2. AFTER: Desktop Capture (1440px)
  console.log('2. Capturing AFTER desktop (http://localhost:3030/)...');
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto('http://localhost:3030/', { waitUntil: 'networkidle', timeout: 20000 });
  await desktopPage.waitForTimeout(2000);
  const afterDesktopDest = path.join(outreachDir, 'after-desktop.png');
  await desktopPage.screenshot({ path: afterDesktopDest, fullPage: true });
  console.log(`✓ AFTER desktop captured: ${afterDesktopDest} (${fs.statSync(afterDesktopDest).size} bytes)`);
  await desktopContext.close();

  // 3. AFTER: Mobile Capture (390px)
  console.log('3. Capturing AFTER mobile (390px)...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:3030/', { waitUntil: 'networkidle', timeout: 20000 });
  await mobilePage.waitForTimeout(2000);
  const afterMobileDest = path.join(outreachDir, 'after-mobile.png');
  await mobilePage.screenshot({ path: afterMobileDest, fullPage: true });
  console.log(`✓ AFTER mobile captured: ${afterMobileDest} (${fs.statSync(afterMobileDest).size} bytes)`);
  await mobileContext.close();

  // 4. AFTER: Video Scrolling Capture
  console.log('4. Recording scrolling demonstration video (after-scroll.mp4)...');
  const recordDir = path.resolve('temp-video');
  if (!fs.existsSync(recordDir)) fs.mkdirSync(recordDir, { recursive: true });

  const videoContext = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: {
      dir: recordDir,
      size: { width: 1280, height: 720 }
    }
  });

  const videoPage = await videoContext.newPage();
  await videoPage.goto('http://localhost:3030/', { waitUntil: 'networkidle', timeout: 20000 });
  await videoPage.waitForTimeout(1000);

  // Smooth scroll down the page
  const totalHeight = await videoPage.evaluate(() => document.body.scrollHeight);
  const step = 450;
  let currentScroll = 0;

  while (currentScroll < totalHeight) {
    currentScroll += step;
    await videoPage.evaluate((y) => window.scrollTo({ top: y, behavior: 'smooth' }), currentScroll);
    await videoPage.waitForTimeout(400);
  }

  // pause at bottom
  await videoPage.waitForTimeout(1500);

  // smooth scroll back up to hero
  await videoPage.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await videoPage.waitForTimeout(1500);

  await videoPage.close();
  await videoContext.close();

  // Locate the recorded video file
  const videoFiles = fs.readdirSync(recordDir).filter(f => f.endsWith('.webm'));
  if (videoFiles.length > 0) {
    const rawVideo = path.join(recordDir, videoFiles[0]);
    const mp4Dest = path.join(outreachDir, 'after-scroll.mp4');
    const gifDest = path.join(outreachDir, 'after-scroll.gif');

    console.log(`Transcoding raw video ${rawVideo} to MP4: ${mp4Dest}...`);
    // Convert to MP4 using ffmpeg
    execSync(`ffmpeg -y -i "${rawVideo}" -c:v libx264 -pix_fmt yuv420p -r 30 -movflags +faststart "${mp4Dest}"`, { stdio: 'inherit' });
    console.log(`✓ MP4 generated: ${mp4Dest} (${fs.statSync(mp4Dest).size} bytes)`);

    console.log(`Generating optimized animated GIF: ${gifDest}...`);
    // Generate optimized GIF with palettegen
    const palette = path.join(recordDir, 'palette.png');
    execSync(`ffmpeg -y -i "${mp4Dest}" -vf "fps=10,scale=720:-1:flags=lanczos,palettegen" "${palette}"`, { stdio: 'inherit' });
    execSync(`ffmpeg -y -i "${mp4Dest}" -i "${palette}" -filter_complex "fps=10,scale=720:-1:flags=lanczos[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=3" "${gifDest}"`, { stdio: 'inherit' });
    console.log(`✓ GIF generated: ${gifDest} (${fs.statSync(gifDest).size} bytes)`);
  }

  await browser.close();
  console.log('All captures and media complete!');
}

captureAll().catch(err => {
  console.error('Fatal capture error:', err);
  process.exit(1);
});
