import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  pgEnum,
  date,
  boolean,
} from "drizzle-orm/pg-core";

export const genderEnum = pgEnum("gender", ["male", "female"]);

/** ユーザー */
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").unique(),
  tel: text("tel").unique(),
  gender: genderEnum("gender"),
  job: text("job").notNull(),
  birthDate: date("birth_date"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

/** 資料 */
export const materials = pgTable("materials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  userId: integer("user_id").references(() => users.id),
  publish: boolean("publish").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
