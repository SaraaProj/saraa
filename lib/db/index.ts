import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

let DURL = process.env.POSTGRES_URL as string | undefined;
// sslmode=require が必要
if (!DURL) {
  throw new Error(`POSTGRES_URL is not defined: URL=${DURL}`);
}
if (!DURL.includes("sslmode") && !process.env.NEXTAUTH_URL?.includes("localhost")) {
  DURL = DURL + "?sslmode=require";
}

export const connection = postgres(DURL, {
  // issue: https://github.com/porsager/postgres/issues/630
  transform: {
    undefined: null,
  },
  max: 10, // 最大接続数を10に制限
  idle_timeout: 20, // アイドル接続のタイムアウトを20秒に設定
  connect_timeout: 10, // 接続タイムアウトを10秒に設定
});

// @ts-expect-error: 型定義に関する問題があるが、動作に影響はないため無視
export const db: PostgresJsDatabase = drizzle(connection, { schema, mode: "planetscale" });
