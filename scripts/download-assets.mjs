import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const targetDir = path.resolve('public/images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const assets = [
  {
    name: 'signature-logo.jpg',
    url: 'http://ocremodel.com/wp-content/uploads/2019/01/signature-logo.jpg',
    intendedSection: 'Header, Footer, About'
  },
  {
    name: 'hero-kitchen-luxury.jpg',
    url: 'https://ocremodel.com/wp-content/uploads/2019/01/1491391_609278085872119_8719034690420433368_o1.jpg',
    intendedSection: 'Hero Main'
  },
  {
    name: 'hero-showroom-kitchen.jpg',
    url: 'https://ocremodel.com/wp-content/uploads/2017/05/wide6.jpg',
    intendedSection: 'Showroom Spotlight & Background'
  },
  {
    name: 'hero-kitchen-contemporary.jpg',
    url: 'https://ocremodel.com/wp-content/uploads/2019/01/11350918_654804954652765_7211909121687618248_n.jpg',
    intendedSection: 'Kitchen Services Feature'
  },
  {
    name: 'service-residential.jpg',
    url: 'https://ocremodel.com/wp-content/uploads/2019/01/11057230_700709740062286_8697393686921654902_n.jpg',
    intendedSection: 'Services - Residential Design'
  },
  {
    name: 'service-commercial.jpg',
    url: 'https://ocremodel.com/wp-content/uploads/2019/02/p3_a.jpg',
    intendedSection: 'Services - Commercial / Office Renovations'
  },
  {
    name: 'service-kitchen-bath.jpg',
    url: 'https://ocremodel.com/wp-content/uploads/2019/01/11243471_661540133979247_7363488633083963368_n.jpg',
    intendedSection: 'Services - Kitchen & Bathroom Design'
  },
  {
    name: 'about-craftsmanship.png',
    url: 'https://ocremodel.com/wp-content/uploads/2016/11/misc_1.png',
    intendedSection: 'About / 40-Year Heritage'
  },
  {
    name: 'showroom-interior.png',
    url: 'https://ocremodel.com/wp-content/uploads/2016/10/deco_3.png',
    intendedSection: 'Showroom Materials & Finishes'
  },
  {
    name: 'project-kitchen-island.jpg',
    url: 'https://ocremodel.com/wp-content/uploads/2020/11/74505856_1037587156573496_5303108987816771584_n-700x466.jpg',
    intendedSection: 'Portfolio - Kitchen'
  },
  {
    name: 'project-living-room-open.jpg',
    url: 'https://ocremodel.com/wp-content/uploads/2020/11/118018125_1280927765572766_2072742979848732718_n-700x466.jpg',
    intendedSection: 'Portfolio - Living Spaces'
  },
  {
    name: 'project-living-fireplace.jpg',
    url: 'https://ocremodel.com/wp-content/uploads/2020/11/74614030_1029445720720973_5755618968232525824_n-700x466.jpg',
    intendedSection: 'Portfolio - Living & Fireplace'
  },
  {
    name: 'project-bath-walkin-shower.jpg',
    url: 'https://ocremodel.com/wp-content/uploads/2020/11/117583986_1280927782239431_1719298886421458079_n-700x466.jpg',
    intendedSection: 'Portfolio - Bathroom Walk-in Shower'
  },
  {
    name: 'project-bath-double-vanity.jpg',
    url: 'https://ocremodel.com/wp-content/uploads/2020/11/120647494_1322921414706734_7048449063078033396_n-700x466.jpg',
    intendedSection: 'Portfolio - Bathroom Double Vanity'
  },
  {
    name: 'project-bath-spa-tile.jpg',
    url: 'https://ocremodel.com/wp-content/uploads/2020/11/117910546_1280946388904237_3373279756449555174_n-700x466.jpg',
    intendedSection: 'Portfolio - Spa Bath & Tile'
  },
  {
    name: 'project-kitchen-farmhouse.jpg',
    url: 'https://ocremodel.com/wp-content/uploads/2020/11/73539201_1029438914054987_8609798931708116992_n-700x466.jpg',
    intendedSection: 'Portfolio - Farmhouse Kitchen'
  },
  {
    name: 'project-kitchen-modern-white.jpg',
    url: 'https://ocremodel.com/wp-content/uploads/2020/11/61739641_912749042390642_7123920833487044608_n-700x466.jpg',
    intendedSection: 'Portfolio - Modern White Kitchen'
  },
  {
    name: 'partner-ultracraft.png',
    url: 'https://ocremodel.com/wp-content/uploads/2019/02/ultracraft-logo-white.png',
    intendedSection: 'Proof Strip - Brand Partner'
  },
  {
    name: 'partner-silestone.png',
    url: 'https://ocremodel.com/wp-content/uploads/2019/02/TBS-logos_left_0000s_0010_Silestone.png',
    intendedSection: 'Proof Strip - Brand Partner'
  },
  {
    name: 'process-meet.png',
    url: 'https://ocremodel.com/wp-content/uploads/2015/08/meeting.png',
    intendedSection: 'Process Step 1'
  },
  {
    name: 'process-concept.png',
    url: 'https://ocremodel.com/wp-content/uploads/2015/08/idea.png',
    intendedSection: 'Process Step 2'
  },
  {
    name: 'process-design.png',
    url: 'https://ocremodel.com/wp-content/uploads/2015/08/design.png',
    intendedSection: 'Process Step 3'
  },
  {
    name: 'process-build.png',
    url: 'https://ocremodel.com/wp-content/uploads/2015/08/build.png',
    intendedSection: 'Process Step 4'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(err);
    });
  });
}

async function run() {
  console.log(`Downloading ${assets.length} assets...`);
  const results = [];
  for (const a of assets) {
    const dest = path.join(targetDir, a.name);
    try {
      await downloadFile(a.url, dest);
      const stats = fs.statSync(dest);
      results.push({ ...a, bytes: stats.size, status: 'OK' });
      console.log(`✓ ${a.name} (${stats.size} bytes)`);
    } catch (err) {
      console.error(`✗ ${a.name}: ${err.message}`);
      results.push({ ...a, bytes: 0, status: 'FAILED: ' + err.message });
    }
  }
  fs.writeFileSync('docs/download-results.json', JSON.stringify(results, null, 2));
  console.log('Download finished.');
}

run();
