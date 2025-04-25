import { NextResponse } from 'next/server'

/**
 * NOTE: これはサンプルのAPIルートです。
 * /api/hello にリクエストを送信すると、Hello, world! というメッセージが返されます。
 */

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)
  return NextResponse.json({
    message: 'Hello, world!',
    query: Object.fromEntries(searchParams),
  })
}
