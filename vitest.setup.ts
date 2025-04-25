import { beforeAll } from "vitest";

beforeAll(() => {
  // Next.jsのApp Routerのテストに必要な環境変数を設定
  process.env.NEXT_RUNTIME = "nodejs";
});
