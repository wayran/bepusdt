import { mockClient } from '../client'
import { orders } from '../mockData'

export const getOrderList = (status?: string) => {
  const data = status ? orders.filter((o) => o.status === status) : orders
  return mockClient.get({ list: data, total: data.length })
}
