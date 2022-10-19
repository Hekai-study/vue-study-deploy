<script setup>
import SidebarItem from './SidebarItem.vue'
import routes from 'router/routes'
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

// 获取有标题的路由做菜单
const mean = routes.filter(route => route.meta && route.meta.title)

// 通过计算属性动态获取当前路由
const activeMean = computed(() => {
  const { meta, path } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
</script>

<template>
  <el-menu
    :default-active="activeMean"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    router="true"
  >
    <SidebarItem
      v-for="route in mean"
      :key="route.path"
      :route="route"
    />
  </el-menu>
</template>

<style scoped lang="scss">
</style>
