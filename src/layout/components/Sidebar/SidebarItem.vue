<script setup>
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  route: {
    type: Object,
    required: true
  }
})
const { route } = toRefs(props)

const router = useRouter()

// 动态获取subRoute的index
const subRouteIndex = path => {
  const routePath = route.value.path
  if (routePath === '/') {
    return `/${path}`
  }
  return `${routePath}/${path}`
}
</script>

<template>
  <el-menu-item
    v-if="route.meta.notChild"
    :index="route.path"
  >{{route.meta.title}}</el-menu-item>
  <el-sub-menu
    v-else
    :index="route.path"
  >
    <template #title>
      <span>{{route.meta.title}}</span>
    </template>
    <el-menu-item
      v-for="subRoute in route.children"
      :key="subRoute.path"
      :index="subRouteIndex(subRoute.path)"
    >
      {{subRoute.meta.title}}
    </el-menu-item>
  </el-sub-menu>
</template>

<style scoped lang="scss">
</style>
