import { mockClient } from '../client'
import { banners, categories, homeSummary } from '../mockData'

export const getHomeSummary = () => mockClient.get(homeSummary)
export const getHomeBanners = () => mockClient.get(banners)
export const getHomeCategories = () => mockClient.get(categories)
