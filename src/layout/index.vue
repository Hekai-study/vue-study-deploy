<script setup>
import Main from './components/Main.vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar/index.vue'
</script>

<template>
  <div class="layout-wrapper">
    <!-- 侧边栏 -->
    <!-- <div class="layout-aside">侧边栏</div> -->
    <Sidebar class="layout-aside" />
    <!-- 内容 -->
    <div class="layout-main">
      <Navbar />
      <Main />
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
