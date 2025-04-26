// @ts-ignore
import fs from "fs";
// @ts-ignore
import path from "path";
// @ts-ignore
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("__dirname", __dirname);
console.log("__filename", __filename);
const appDir = path.join(__dirname, "../../app");
console.log("appDir", appDir);

function walkDir(dir: string, callback: (filePath: string) => void) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath, callback);
    } else {
      callback(fullPath);
    }
  }
}

function isPageFile(filePath: string): boolean {
  const pageExtensions = [".tsx", ".ts", ".js", ".jsx"];
  return pageExtensions.some((ext) => filePath.endsWith(ext));
}

function relativeAppPath(filePath: string): string {
  return path.relative(appDir, filePath).replace(/\\/g, "/"); // for Windows compatibility
}

const exportPages = () => {
  console.log("🔍 App Directory Pages:");

  const pageFiles: string[] = [];
  walkDir(appDir, (filePath) => {
    if (isPageFile(filePath)) {
      pageFiles.push(relativeAppPath(filePath));
    }
  });

  pageFiles.forEach((file) => {
    console.log(` - /${file}`);
  });

  console.log(`📝 Total pages found: ${pageFiles.length}`);
};

export { exportPages };
