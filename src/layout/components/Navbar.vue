<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import Breadcrumb from './Breadcrumb.vue'
</script>

<template>
  <div class="main-header">
    <!-- 面包屑 -->
    <Breadcrumb />
    <!-- 右侧下拉菜单 -->
    <div class="right-menu">
      <el-dropdown placement="bottom-end">
        <span class="el-dropdown-link">
          我的
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>信息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
