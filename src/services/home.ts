import { http } from '@/utils/http'

/*
  首页-广告区域-小程序
  @param distributionSite integer 可选广告区域展示位置 1 为首页（默认值）2 为商品分类页
*/

export const getHomeBannerAPI = (distributionSite = 1) => {
  return http({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
