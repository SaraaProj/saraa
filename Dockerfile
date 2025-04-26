# ベースイメージとして Bun を使用
FROM oven/bun:1

# 依存関係のインストール
RUN apt-get update && apt-get install -y libc6 && rm -rf /var/lib/apt/lists/*
WORKDIR /app

# アプリケーションのソースコードをコピー
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

ENV LANG=C.UTF-8 \
    TZ=Asia/Tokyo 

# アプリケーションのソースコードをコピー
COPY src ./src
COPY public ./public
COPY drizzle.config.ts .
COPY tsconfig.json .
COPY tailwind.config.ts .
COPY postcss.config.mjs .
COPY next.config.ts .
COPY asyncLocalStorageSetup.ts .


# ポートを公開
EXPOSE 3001

# アプリケーションをデフォルトで起動
CMD ["bun", "run", "dev"]
