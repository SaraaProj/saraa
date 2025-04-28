
/**
 * 実行前処理
 */

import { exportPages } from "./export-pages";

let isSetup = false;
const startSetup = async () => {
  if (isSetup) return;
  // 事前に処理を行う
  console.log(">>>> Start setup");
  isSetup = true;
  exportPages();
}

export { startSetup };
