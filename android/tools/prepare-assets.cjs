// Připraví hru pro aplikaci na Android TV:
// vezme index.html (cz) a en/index.html z kořene repozitáře, převede JavaScript
// do starší podoby (ES2017), aby mu rozuměl i starší WebView na TV boxu,
// a uloží výsledek do android/app/src/{cz,en}/assets/index.html.
const fs = require('fs');
const path = require('path');
const esbuild = require(process.env.ESBUILD_PATH || 'esbuild');

const root = path.resolve(__dirname, '..', '..');
const jobs = [
  { from: path.join(root, 'index.html'), to: path.join(__dirname, '..', 'app', 'src', 'cz', 'assets', 'index.html') },
  { from: path.join(root, 'en', 'index.html'), to: path.join(__dirname, '..', 'app', 'src', 'en', 'assets', 'index.html') }
];

for (const job of jobs) {
  const html = fs.readFileSync(job.from, 'utf8');
  let count = 0;
  const out = html.replace(/<script>([\s\S]*?)<\/script>/g, (m, code) => {
    const res = esbuild.transformSync(code, { loader: 'js', target: 'es2017', charset: 'utf8' });
    count++;
    return '<script>\n' + res.code + '</script>';
  });
  fs.mkdirSync(path.dirname(job.to), { recursive: true });
  fs.writeFileSync(job.to, out, 'utf8');
  console.log(`${path.relative(root, job.from)} -> ${path.relative(root, job.to)} (${count} skripty)`);
}
