<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router"
const route = useRoute()

const levelList = ref(null)

// 动态获取面包屑内容
const getBreadcrumb = () => {
  levelList.value = route.matched.filter(item => item.meta && item.meta.title)
}

// 路由发生变化时，重新获取面包屑内容
watch(route, getBreadcrumb, { immediate: true })
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="level in levelList"
      :key="level.path"
      :to="{
        path: `${level.path}`,
      }"
    >
      {{ level.meta.title}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>


<style scoped lang="scss">
</style>
