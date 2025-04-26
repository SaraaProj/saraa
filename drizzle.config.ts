import type { Config } from "drizzle-kit";

let DURL = process.env.POSTGRES_URL as string | undefined;
// Docker環境ではホスト名をsaraa-postgresに変更
if (process.env.DOCKER_CONTAINER) {
  DURL = DURL?.replace('localhost', 'saraa-postgres');
}

// sslmode=require が必要
if (!DURL) {
  throw new Error(`POSTGRES_URL is not defined: URL=${DURL}`);
}
if (!DURL.includes("sslmode") && !process.env.NEXTAUTH_URL?.includes("localhost")) {
  DURL = DURL + "?sslmode=require";
}

export default {
  schema: "./lib/db/schema.ts",
  out: "./lib/db/migrations",
  dbCredentials: {
    url: DURL,
  },
  verbose: true, // ログを出力
  strict: false, // pushする前に承認を求めない
  dialect: "postgresql",
} satisfies Config;
