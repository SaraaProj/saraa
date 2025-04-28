import "../../asyncLocalStorageSetup";
import { expect, test } from "vitest";
import * as appHandler from "../../app/api/hello/route";
import { testApiHandler } from "next-test-api-route-handler";

/**
 * NOTE: サンプルのAPIルートのテスト
 * HelloAPIで messageが"Hello, world!"であるか
 */
test("GET /api/hello", async () => {
  await testApiHandler({
    appHandler,
    test: async ({ fetch }) => {
      const res = await fetch({ method: "GET" });
      const json = await res.json();
      expect(json).toEqual({
        message: "Hello, world!",
        query: {},
      });
    },
  });
});
