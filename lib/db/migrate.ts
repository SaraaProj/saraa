import { migrate } from "drizzle-orm/pg-proxy/migrator";

import { connection, db } from "@/db";

import "dotenv/config";

// @ts-expect-error: 型定義に関する問題があるが、動作に影響はないため無視
await migrate(db, { migrationsFolder: "./src/lib/db/migrations" });

await connection.end();
