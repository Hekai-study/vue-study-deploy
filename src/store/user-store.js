import { defineStore } from 'pinia'
import { user } from 'api'

// 创建容器
const useUserStore = defineStore('user', {
  state: () => ({
    info: {},
    token: ''
  }),
  actions: {
    async login (userInfo) {
      const { data } = await user.login(userInfo)
      console.log('data', data);
      this.token = data.token
    },
    async getUserInfo () {
      // 请求后存储token
      const { data } = await user.getUser()
      console.log('data', data);
      this.info = data.info
    },
  }
})

export default useUserStore
