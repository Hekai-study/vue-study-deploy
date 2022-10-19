<!--
 * @Description: 文件描述
-->
<script setup>
import { useUserStore } from 'store'
import { useRouter } from 'vue-router';

console.log('Home渲染');
const userStore = useUserStore()

const router = useRouter()

const handlerClick = () => {
  // 登录
  userStore.login({name: '李四', age: '66'}).then(() => {
    router.push({ name: 'test' })
  })
}

const getDetail = () => {
  router.push({ name: 'Detail', params: {id: 1} })
}
</script>

<template>
  <div class="greetings">
    <hr />
    <h2>Home页面</h2>
    <el-button type="primary" @click="handlerClick">登录</el-button>
    <el-button @click="getDetail">查看详情</el-button>
    <hr />
    <router-view></router-view>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
