<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h1 class="page-header">{{ title }}</h1>
    <div class="table-responsive">
      <div class="box" v-for="item in subjects" :key="item.id">
        <div>
          <img v-bind="{ src: item.images.large }" alt="">
        </div>
        <span>{{ item.title }}</span>
        <span>{{ item.genres }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	// 映射属性
	computed: {
		...mapState('movieList', {
			title: 'title',
			subjects: 'subjects'
		})
	},
	// 映射action中的方法
	methods: {
		...mapActions('movieList', {
			getData: 'getData'
		})
	},
	created() {
		// 页面打开时，获取数据
		this.getData();
	}
};
</script>

<style>
.box {
  border: 1px solid #ccc;
  margin-top: 10px;
}
.box div {
	width: 270px;
	height: 378px;
  border: 1px solid #ccc;
  display: inline-block;
}
</style>
