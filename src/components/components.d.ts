// src/types/components.d.ts
import JzsSwiper from './JzsSwiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    JzsSwiper: typeof Jzswiper
  }
}
