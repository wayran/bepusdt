export interface ApiResult<T> {
  code: number
  message: string
  data: T
}

export interface PageReq {
  page: number
  pageSize: number
}

export interface HomeSummary {
  userName: string
  todayIncome: number
  monthIncome: number
  availableBalance: number
  pendingSettlement: number
}

export interface Banner {
  id: number
  title: string
  image: string
  link: string
}

export interface GoodsItem {
  id: number
  title: string
  image: string
  originalPrice: number
  couponPrice: number
  finalPrice: number
  commissionRate: number
  monthlySales: number
  shopName: string
  tags: string[]
}

export interface GoodsListReq extends PageReq {
  keyword?: string
  categoryId?: number
  sortBy?: 'sales' | 'commission' | 'price'
}

export interface GoodsDetail extends GoodsItem {
  detailImages: string[]
  couponAmount: number
  expireTime: string
  promotionLink: string
}

export interface Category {
  id: number
  name: string
  icon: string
}

export interface OrderItem {
  id: string
  goodsTitle: string
  goodsImage: string
  orderAmount: number
  estimatedCommission: number
  status: 'pending' | 'paid' | 'settled' | 'invalid'
  createTime: string
}

export interface LoginReq {
  phone: string
  captcha: string
}

export interface LoginResp {
  token: string
  refreshToken: string
  expireAt: string
}

export interface UserProfile {
  id: number
  nickName: string
  avatar: string
  level: string
  inviteCode: string
  totalIncome: number
  followers: number
}

export interface WithdrawReq {
  amount: number
  accountType: 'alipay' | 'bank'
  accountNo: string
  accountName: string
}

export interface MessageItem {
  id: number
  title: string
  content: string
  createdAt: string
  read: boolean
}
