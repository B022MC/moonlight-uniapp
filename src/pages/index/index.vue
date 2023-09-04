<script setup lang="ts">
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const bannerList = ref([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  console.log(res)
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <CustomNavbar />
  <JzsSwiper />
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
