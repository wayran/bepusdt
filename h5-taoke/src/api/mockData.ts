import type {
  Banner,
  Category,
  GoodsDetail,
  GoodsItem,
  HomeSummary,
  MessageItem,
  OrderItem,
  UserProfile
} from './types'

export const homeSummary: HomeSummary = {
  userName: '联盟推广员-小满',
  todayIncome: 328.66,
  monthIncome: 8239.2,
  availableBalance: 2660.5,
  pendingSettlement: 1328.45
}

export const banners: Banner[] = [
  { id: 1, title: '品牌大促', image: 'https://picsum.photos/720/280?1', link: '/coupons' },
  { id: 2, title: '新人免单', image: 'https://picsum.photos/720/280?2', link: '/goods/1' }
]

export const categories: Category[] = [
  { id: 1, name: '服饰', icon: '👗' },
  { id: 2, name: '家居', icon: '🏠' },
  { id: 3, name: '美妆', icon: '💄' },
  { id: 4, name: '数码', icon: '📱' },
  { id: 5, name: '食品', icon: '🍜' },
  { id: 6, name: '母婴', icon: '🍼' }
]

export const goodsList: GoodsItem[] = Array.from({ length: 12 }).map((_, idx) => ({
  id: idx + 1,
  title: `爆款商品 ${idx + 1} - 高转化内容素材包`,
  image: `https://picsum.photos/360/360?goods=${idx + 1}`,
  originalPrice: 199 + idx,
  couponPrice: 50,
  finalPrice: 149 + idx,
  commissionRate: 0.25 + (idx % 3) * 0.03,
  monthlySales: 1200 + idx * 98,
  shopName: '联盟旗舰店',
  tags: ['高佣', '包邮']
}))

export const goodsDetail: GoodsDetail = {
  ...goodsList[0],
  couponAmount: 50,
  expireTime: '2026-12-30 23:59:59',
  promotionLink: 'https://promo.example.com/item/1',
  detailImages: [
    'https://picsum.photos/720/900?detail=1',
    'https://picsum.photos/720/900?detail=2'
  ]
}

export const orders: OrderItem[] = Array.from({ length: 8 }).map((_, idx) => ({
  id: `TK${Date.now()}${idx}`,
  goodsTitle: `订单商品 ${idx + 1}`,
  goodsImage: `https://picsum.photos/120/120?order=${idx}`,
  orderAmount: 89 + idx * 12,
  estimatedCommission: 12 + idx * 2,
  status: ['pending', 'paid', 'settled', 'invalid'][idx % 4] as OrderItem['status'],
  createTime: `2026-02-${String(idx + 10).padStart(2, '0')} 14:2${idx}`
}))

export const profile: UserProfile = {
  id: 1001,
  nickName: '专业淘客小满',
  avatar: 'https://picsum.photos/120/120?avatar',
  level: '金牌推广员',
  inviteCode: 'TK8899',
  totalIncome: 56890.88,
  followers: 3280
}

export const messages: MessageItem[] = [
  {
    id: 1,
    title: '佣金结算提醒',
    content: '您有 1 笔订单已结算，佣金已入账。',
    createdAt: '2026-02-20 10:12',
    read: false
  },
  {
    id: 2,
    title: '活动通知',
    content: '女王节活动即将开启，高佣商品池已更新。',
    createdAt: '2026-02-19 08:00',
    read: true
  }
]
