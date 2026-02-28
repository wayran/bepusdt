import { mockClient } from '../client'
import { goodsDetail, goodsList } from '../mockData'
import type { GoodsListReq } from '../types'

export const getGoodsList = (params: GoodsListReq) => {
  let list = goodsList
  if (params.keyword) {
    list = list.filter((item) => item.title.includes(params.keyword ?? ''))
  }
  return mockClient.get({ list, total: list.length })
}

export const getGoodsDetail = (id: number) => mockClient.get({ ...goodsDetail, id })

export const createSharePoster = (id: number) =>
  mockClient.post({ id, posterUrl: `https://picsum.photos/540/960?poster=${id}` })
