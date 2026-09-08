// Rewrites every "/videos/<name>.mp4" reference in the given source files to
// the matching Cloudinary secure_url from scripts/cloudinary-video-map.json
// (produced by upload-videos-to-cloudinary.js). Run once, after the upload
// script has finished.

const fs = require("fs");
const path = require("path");

const mapPath = path.join(__dirname, "cloudinary-video-map.json");
const map = JSON.parse(fs.readFileSync(mapPath, "utf8"));

const targets = [
  "app/components/GalleryHero.tsx",
  "app/components/GalleryGrid.tsx",
  "app/components/Hero.tsx",
  "app/lib/packages.ts",
].map((p) => path.join(__dirname, "..", p));

let totalReplacements = 0;

for (const file of targets) {
  let content = fs.readFileSync(file, "utf8");
  let fileReplacements = 0;

  for (const [filename, url] of Object.entries(map)) {
    const localPath = `/videos/${filename}`;
    const occurrences = content.split(localPath).length - 1;
    if (occurrences > 0) {
      content = content.split(localPath).join(url);
      fileReplacements += occurrences;
    }
  }

  if (fileReplacements > 0) {
    fs.writeFileSync(file, content);
    console.log(`${path.relative(process.cwd(), file)}: ${fileReplacements} replacement(s)`);
    totalReplacements += fileReplacements;
  } else {
    console.log(`${path.relative(process.cwd(), file)}: no matches`);
  }
}

console.log(`\nTotal: ${totalReplacements} replacement(s) across ${targets.length} file(s).`);
