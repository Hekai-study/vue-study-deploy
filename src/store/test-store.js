import { defineStore } from 'pinia'

// 创建容器
const useTestStore = defineStore('test', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment () {
      this.counter++
    },
    decrement () {
      this.counter--
    },
  },
  getters: {
    getTest () {
      return this.counter
    },
  }
})

export default useTestStore
