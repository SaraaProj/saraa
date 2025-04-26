// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import fs from "fs";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import path from "path";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appDir = path.join(__dirname, "../../app");

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

  const noAuthPagePaths = []
  const apiRoutes = []
  const authPagePaths = []
  pageFiles.forEach((file) => {
    if (file.startsWith("/api") || file.endsWith("route.ts")) {
      apiRoutes.push(file);
    } else if (file.endsWith("page.tsx")) {
      if (file.startsWith("(auth)")) {
        authPagePaths.push(file);
      } else {
        noAuthPagePaths.push(file);
      }
    }
  });
  
  console.log(`📝 Total pages found: ${pageFiles.length}`);
  console.log(`📝 Total noAuth pages found: ${noAuthPagePaths.length}`);
  console.log(`📝 Total auth pages found: ${authPagePaths.length}`);
  console.log(`📝 Total api routes found: ${apiRoutes.length}`);

  console.log(`📝 Total pages found: ${pageFiles.length}`);
};

export { exportPages };
