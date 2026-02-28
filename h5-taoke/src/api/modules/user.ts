import { mockClient } from '../client'
import { messages, profile } from '../mockData'
import type { LoginReq, WithdrawReq } from '../types'

export const login = (payload: LoginReq) =>
  mockClient.post({
    token: `mock-token-${payload.phone}`,
    refreshToken: 'mock-refresh-token',
    expireAt: '2026-12-31 23:59:59'
  })

export const getProfile = () => mockClient.get(profile)
export const getWallet = () => mockClient.get({
  availableBalance: 2660.5,
  frozenBalance: 200,
  todayIncome: 328.66,
  monthIncome: 8239.2
})

export const withdraw = (payload: WithdrawReq) => mockClient.post({
  withdrawId: `WD${Date.now()}`,
  status: 'processing',
  ...payload
})

export const getMessages = () => mockClient.get(messages)
