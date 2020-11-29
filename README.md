# dloppのdocument管理

- 勉強会の資料作ったり、何か変わったことがあれば追記したりする用
- GitHubに慣れる意味もかねて、意見や要望はissueでも対応します
- プルリク歓迎

## 開発

### 流れ
1. Node.js + yarn のインストール
2. ローカルにクローンしてpackageをインストールする
3. 開発開始

<br>

### 1. Node.js + yarn のインストール
#### Node.jsのインストール
こちらから→https://nodejs.org インストールしてください
#### npmを確認
```bash
# node.jsのバージョンを確認
node -v
# npmのバージョンを確認
npm -v
```

#### yarnをインストール（[yarn公式サイト](https://classic.yarnpkg.com/ja/docs/install#windows-stable)からでも良いです。その場合は、一行目を飛ばしてください.）
```bash
# npm 経由でyarnをインストール
npm install -g yarn
# yarnのバージョンを確認
yarn -v
```

<br>

### 2. ローカルにクローンしてpackageをインストールする
#### ローカルにコピーする
```bash
# 作業ディレクトリに移動した後
git clone https://github.com/dlopp/documents.git
```
#### packageのインストール
```bash
# documentsディレクトリに移動
cd documents
# package.json 内の全ての依存関係を node_modules 内にインストール
yarn
```

<br>

### 3. 開発開始
```bash
yarn dev
```
http://localhost:8080/
にアクセスすると、ローカルでプレビューしながら開発できます.
setting系をいじった時などは
```bash
# ctrl + c してから
yarn dev
```
でリロードしてください.
