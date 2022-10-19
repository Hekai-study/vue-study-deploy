<script setup>
import { getCurrentInstance } from 'vue'
// 获取全局属性
const { proxy } = getCurrentInstance()
</script>

<template>
  <div class="main-body">
    <h1>主体内容</h1>
    <!-- 内部显示子路由的信息 -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style scoped lang="scss">
.main-body {
  /*60 = navbar  */
  min-height: calc(100vh - 60px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 50px 20px;
}
h1 {
  margin-bottom: 50px;
}
</style>
