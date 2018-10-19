<template>
  <div id="app">
    <!-- 头部组件 -->
    <aHeader />
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏组件 -->
        <Asider />
        <!-- 主内容组件 -->
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import aHeader from '@/components/header.vue';
import Asider from '@/components/asider.vue';
export default {
	name: 'App',
	components: {
    aHeader,
    Asider
	}
};
</script>

<style>
</style>
