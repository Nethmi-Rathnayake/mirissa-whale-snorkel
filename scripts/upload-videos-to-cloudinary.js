// One-off/re-run migration script: uploads every file in public/videos/ to
// Cloudinary and writes a filename -> secure_url map to
// scripts/cloudinary-video-map.json. Reads CLOUDINARY_CLOUD_NAME /
// CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET from .env.local.
//
// Run with: node -r dotenv/config scripts/upload-videos-to-cloudinary.js dotenv_config_path=.env.local
// or just:  node scripts/upload-videos-to-cloudinary.js  (with env vars exported in the shell)

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
  console.error(
    "Missing CLOUDINARY_CLOUD_NAME / CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET env vars."
  );
  process.exit(1);
}

const FOLDER = "mirissa-whale-snorkel";
const videosDir = path.join(__dirname, "..", "public", "videos");
const files = fs.readdirSync(videosDir).filter((f) => f.endsWith(".mp4"));

function sign(params) {
  const toSign = Object.keys(params)
    .sort()
    .map((k) => `${k}=${params[k]}`)
    .join("&");
  return crypto
    .createHash("sha1")
    .update(toSign + API_SECRET)
    .digest("hex");
}

async function uploadOne(filename) {
  const filePath = path.join(videosDir, filename);
  const publicId = path.basename(filename, ".mp4");
  const timestamp = Math.floor(Date.now() / 1000);

  const signature = sign({ folder: FOLDER, public_id: publicId, timestamp });

  const form = new FormData();
  form.append("file", new Blob([fs.readFileSync(filePath)]), filename);
  form.append("api_key", API_KEY);
  form.append("timestamp", String(timestamp));
  form.append("folder", FOLDER);
  form.append("public_id", publicId);
  form.append("signature", signature);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`,
    { method: "POST", body: form }
  );
  const json = await res.json();
  if (!res.ok) {
    throw new Error(JSON.stringify(json));
  }
  return json.secure_url;
}

(async () => {
  const results = {};
  const mapPath = path.join(__dirname, "cloudinary-video-map.json");
  if (fs.existsSync(mapPath)) {
    Object.assign(results, JSON.parse(fs.readFileSync(mapPath, "utf8")));
  }

  for (const filename of files) {
    if (results[filename]) {
      console.log("skip (already uploaded):", filename);
      continue;
    }
    process.stdout.write(`uploading ${filename} ... `);
    try {
      const url = await uploadOne(filename);
      results[filename] = url;
      fs.writeFileSync(mapPath, JSON.stringify(results, null, 2));
      console.log("ok ->", url);
    } catch (err) {
      console.log("FAILED");
      console.error(err.message);
    }
  }

  console.log(`\nDone. Map written to ${mapPath}`);
})();
