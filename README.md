<div align="center">

<img src="https://github.com/user-attachments/assets/f660b332-ed39-43aa-9f7e-fa2e41903d8e" width="200" />

# Saraa in Study Apps (随時更新)

**WIP:** Hosting準備中

### 学習のオープンソース化プロダクト
誰でも利用できる学びのパーソナルAIエージェント

[WIP: Apps サイト](https://tokumei-devs.vercel.app/)

</div>

## Phase1. WIP Status
- [x] サービス設計
- [x] 基本設計
  - [ ] 技術選定
  - [ ] アーキテクチャ
- [ ] UI設計 (Figma)
- [ ] 実装設計
  - [ ] テーブル設計
  - [ ] 認証設計
  - [ ] テスト設計
  - [ ] インフラ調整
  - [ ] ホスティングテスト
- [ ] 実装
- [ ] 運用
- [ ] FB調整

## 特徴🌴
* 個人の興味やレベルに沿った学習🚀
* LLMを使用した教科書の自動生成📖
* 直観的なノートシステムの連携📒
* タブレット/モバイルベースでiOS/Android対応のインストール可能なPWA対応📱
* OSSにすることで安全性/公平性の担保と再利用可能なシステム🔒
* 肯定的な精神的寄り添いによる自己肯定のサポート🩹

## こだわる部分 (Must)
- UI/UXへの思い
  - 美しくシンプルなデザイン (個性的すぎない事)
    - 日本に特化するために、デジタル庁のデザインシステムを参照
  - 使う側が可能な限り直観的で操作に苦痛がない事
  - PWAによるネイティブサポート
  - 例:
    - 入口のチャット式とヒアリング式であいまいな入力で欲しい結果が得られる
    - LLM + 音声認識によるUIサポート
- 安全性と再利用性
  - 透明性
    - 完全なOSS化することで不正なバグや取引がない事の証明
    - LLMの利用料の完全還元し、利用料をそのまま充てる。
      - 利潤を求めない。
      - 課金分だけLLMが利用できる仕組み。
  - 汎用性
    - このレポジトリを参照し、似たプロダクトを容易に複製できること
    - アーキテクチャを再利用/参照し、プロダクトを簡単に作成できること
  - シンプルさ
    - 複雑なアーキテクチャは組まず、サーバーレスでなるべくVercelのみで完結させたい。
- 誰でも使える
  - エコシステムでの無料利用
    - 他ユーザーがLLMで生成した教材をユーザーはパブリックで提供できる
    - パブリック教材で無料学習が行える

## 技術選定
- Bun
- Nextjs
  - HeroUI (TailWindCSS + FramerMotion)
  - Jotai (状態管理)
  - drizzle (ORM)
  - vitest (ロジックの単体テスト)
  - next-test-api-route-handler (APIテスト)
  - OpenAPI (RESTful-API)
  - Auth.js (LINEログイン / Googleログイン / )
  - OpenAPI-TTS (合成音声)
  - ReactSpeechRecognition (音声認識)
- Infra
  - Github Action
    - CI
  - Vercel
    - Hosting (CD)
    - Blob
    - Postgres
- LLM
  - ChatGPT
  - Gemini
- Stripe

## アーキテクチャ

```bash
saraa
  |- app # API / Pageに特化
     |- api # API
     |- (auth) # 認証済みページ
         |- actions # ページ専用アクション
         |- ui # ページ専用UI
     |- (public) # 認証なしページ
  |- src # 共通ソース
    |- hooks
    |- providers
    |- atoms
    |- utils
    |- types
    |- constants
    |- components
  |- lib # インフラ / テスト系
     |- test
         |- factories
         |- (未定) # 模索中
     |- db
         |- crud
         |- schemas
         |- migrations
         |- seeds
```

### 名称の由来
※ **Saraa:** ヒンドゥ教の知と創造性を司る神【サラスヴァティ】からとっています。

