import { expect, test } from 'vitest'
import * as appHandler from '../../app/api/hello/route'
import { testApiHandler } from 'next-test-api-route-handler'

/**
 * NOTE: サンプルのAPIルートのテスト
 * SampleAPIで messageが"Helli, world!"であるか
 */
test('GET /api/hello', async () => {
  await testApiHandler({
    appHandler,
    // 任意のリクエストヘッダを追加する
    requestPatcher(request) {
      // TODO: 認証やその他のヘッダを追加する場合に利用する
      request.headers.set('key', process.env.SPECIAL_TOKEN!)
    },
    async responsePatcher(response) {
      const json = await response.json()
      return Response.json(
        json.apiSuccess ? { ...json, apiSuccess: true } : json,
      )
    },
    async test({ fetch }) {
      const res = await fetch({ method: 'GET' })
      await expect(res.json()).resolves.toStrictEqual({
        message: 'Hello, world!',
        query: {},
      })
    },
  })
})
