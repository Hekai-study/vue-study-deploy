import { defineStore } from 'pinia'
import { user } from 'api'

// 创建容器
const useMainStore = defineStore('main', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment () {
      this.count++
    },
    decrement () {
      this.count--
    },
    async getUser () {
      this.users = await user.getUser()
    }
  },
  getters: {
    getCount () {
      return this.count
    },
  }
})

export default useMainStore
