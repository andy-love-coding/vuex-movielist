<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <router-link :to="{name: 'in_theaters'}" tag="li" active-class="active">
        <a>正在热议</a>
      </router-link>
      <router-link :to="{name: 'coming_soon'}" tag="li" active-class="active">
        <a>即将上映</a>
      </router-link>
      <router-link :to="{name: 'top250'}" tag="li" active-class="active">
        <a>Top250</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
