# dloppのdocument管理

- 勉強会の資料作ったり、何か変わったことがあれば追記したりする用
- GitHubに慣れる意味もかねて、意見や要望はissueでも対応します。
- まだ発展途上です。
- PR歓迎

## 開発
開発には、[Node.js](https://nodejs.org)が必要です。今年中にぃDockerを導入します。

### 下準備
#### npmを確認
```bash
# node.jsのバージョンを確認
node -v
# npmのバージョンを確認
npm -v
```

#### yarnをインストール（[yarn公式サイト](https://classic.yarnpkg.com/ja/docs/install#windows-stable)からでも良いです。その場合は、一行目を飛ばしてください。）
```bash
# npm 経由でyarnをインストール
npm install -g yarn
# yarnのバージョンを確認
yarn -v
```
### こっから作業ディレクトリで
#### packageのインストールとあれ
```bash
# packageのインストール
yarn
# 開始の合図
yarn dev
```

http://localhost:8080/
にアクセスすると開発を開始できます。

```bash
# ctrl + c してから
yarn dev
```
でリロードできます。
