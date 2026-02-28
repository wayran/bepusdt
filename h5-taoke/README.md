# 淘客联盟 H5（Vue3 + TS）

专业风格的 H5 淘客联盟项目模板，包含：首页、领券、商品详情、订单、个人中心、钱包、提现、消息、登录等完整页面。

## 启动

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## API 设计（先定义后接入）

目前使用 `src/api/mockData.ts` + `src/api/client.ts` 模拟后端，所有接口统一返回：

```ts
interface ApiResult<T> {
  code: number
  message: string
  data: T
}
```

### 首页
- `GET /api/home/summary`
  - 入参：无
  - 出参：`HomeSummary`
- `GET /api/home/banners`
  - 入参：无
  - 出参：`Banner[]`
- `GET /api/home/categories`
  - 入参：无
  - 出参：`Category[]`

### 商品
- `GET /api/goods/list`
  - 入参：`GoodsListReq`
  - 出参：`{ list: GoodsItem[]; total: number }`
- `GET /api/goods/detail`
  - 入参：`{ id: number }`
  - 出参：`GoodsDetail`
- `POST /api/goods/share-poster`
  - 入参：`{ id: number }`
  - 出参：`{ id: number; posterUrl: string }`

### 订单
- `GET /api/order/list`
  - 入参：`{ status?: string }`
  - 出参：`{ list: OrderItem[]; total: number }`

### 用户
- `POST /api/user/login`
  - 入参：`LoginReq`
  - 出参：`LoginResp`
- `GET /api/user/profile`
  - 入参：无
  - 出参：`UserProfile`
- `GET /api/user/wallet`
  - 入参：无
  - 出参：`{ availableBalance; frozenBalance; todayIncome; monthIncome }`
- `POST /api/user/withdraw`
  - 入参：`WithdrawReq`
  - 出参：`{ withdrawId; status }`
- `GET /api/user/messages`
  - 入参：无
  - 出参：`MessageItem[]`

## 后续对接真实后端建议
1. 将 `mockClient` 替换为 axios 实例并添加 token 拦截器。
2. 接口模块函数签名不变，便于平滑迁移。
3. 补充错误码处理（鉴权失效、风控拦截、请求限流）。
