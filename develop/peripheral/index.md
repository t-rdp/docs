# 基于 Misskey 平台的周边生态开发

## 限制与使用规约

我们开放 API 的使用权限，允许本站注册用户在遵守[合理使用规约](/aup/)的情况下适度使用本站的 API ，以进一步提升使用体验。

出于对整个联邦宇宙的资源合理利用原则，您不应当使用自动化程式高频执行任何意义上的操作，包括但不仅限于关注与取消关注、发送贴文、发送消息、搜索、获取数据等。站点使用 CloudFlare 进行保护，Misskey 本身也自带一套 API 速率限制的设置，请避免行为因请求过于频繁而遭到系统的保护性限制。



另外，出于提高辨识度的考虑，如果是只用于 bot 功能的账号，推荐您开启账号中的 bot 标记。

无论出于何种原因，如果您的账号出现了违反服务条款的行为，您都需要承担相应的责任。

## Misskey 的授权模式

请参见 [Misskey 的授权模式](./auth/)

## 使用 API Token

以获取当前用户信息为例，使用的 API 地址为 `/api/i` 。

该接口为使用 `POST` 方式提交 `json` 数据，请注意设置请求头中的 `Content-Type` 为 `application/json` ，以避免 HTTP 415 错误。

该接口需要传入的请求体为：

```json
{
  "i": "API Token"
}
```

返回结果的格式也是 JSON 。

当 API Token 正确时，会返回一个包含用户信息的 Object 。

## 文档与 SDK

请参阅 MisskeyHub 的 [エンドポイント一覧](https://misskey-hub.net/docs/api/endpoints.html) 部分的描述。

Misskey 官方提供了 JavaScript / TypeScript 使用的 SDK [misskey.js](https://github.com/misskey-dev/misskey.js) ，您可以直接使用。
