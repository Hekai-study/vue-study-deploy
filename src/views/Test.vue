<script setup>
import { useUserStore, storeToRefs } from 'store'
const userStore = useUserStore()
const getUserInfo = () => {
  userStore.getUserInfo().then(() => {
    console.log(userStore);
  })
}
</script>

<template>
  <h1>测试</h1>
  <el-button type="primary" @click="getUserInfo">获取用户数据</el-button>
</template>

<style scoped lang="scss">

</style>
