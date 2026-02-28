import type { ApiResult } from './types'

const simulateDelay = <T>(data: T, message = 'success', code = 0, timeout = 250): Promise<ApiResult<T>> =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ code, message, data }), timeout)
  })

export const mockClient = {
  get: simulateDelay,
  post: simulateDelay
}

export const apiEndpoints = {
  home: {
    summary: '/api/home/summary',
    banners: '/api/home/banners',
    categories: '/api/home/categories'
  },
  goods: {
    list: '/api/goods/list',
    detail: '/api/goods/detail',
    createSharePoster: '/api/goods/share-poster'
  },
  order: {
    list: '/api/order/list',
    detail: '/api/order/detail'
  },
  user: {
    login: '/api/user/login',
    profile: '/api/user/profile',
    wallet: '/api/user/wallet',
    withdraw: '/api/user/withdraw',
    messages: '/api/user/messages'
  }
}
