# Project3

## アプリ概要

チャットアプリ
graphQL練習用

<img src="https://user-images.githubusercontent.com/46289011/103225514-646c1580-496d-11eb-82de-88682c63068e.png" width=20% />
<img src="https://user-images.githubusercontent.com/46289011/103225580-91b8c380-496d-11eb-8b50-f09bf13ed26c.png" width=20% />
<img src="https://user-images.githubusercontent.com/46289011/103225589-94b3b400-496d-11eb-9a20-fded2021363f.png" width=20% />
<img src="https://user-images.githubusercontent.com/46289011/103225591-95e4e100-496d-11eb-97bf-c3480970755d.png" width=20% />

## 実行方法

git cloneした後、フロントエンド、バックエンドでそれぞれを実行する

### フロントエンド

1. pcにxcodeをインストール、携帯端末にexpoアプリをインストールする
2. 以下のコマンドを実行

```
$ cd expo
$ npm install
$ npm run start
```

3. pcのウェブ画面にQRコードが表示されるので、iOSの場合カメラアプリを起動、Androidの場合はexpoアプリでQRコードを読み込む

### バックエンド

以下のコマンドを実行

```
$ cd server
$ npm install
$ npm run start-dev
```