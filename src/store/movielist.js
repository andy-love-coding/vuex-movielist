// 用来管理movielist中的数据
import jsonp from 'jsonp';
const movieList = {
  namespaced: true, // 给模块加一个命名空间movieList
  state: {
    title: '', // 页面标题
    subjects: [] // 页面内容
  },
  getters: {},
  mutations: { // mutations中不能做异步操作
    // 给仓库属性赋值
    getData(state, payload) {
      state.title = payload.title;
      state.subjects = payload.subjects;
    }
  },
  actions: {
    // 请求数据
    getData(context, payload) { // actions中可以做异步操作
      var url = 'http://api.douban.com/v2/movie/in_theaters';
      jsonp(url, null, (err, data) => {
        if (err) {
          console.error(err.message);
        } else {
          context.commit({
            type: 'getData', // 提交mutations中的方法，带上载荷payload
            // title: data.title,
            // subjects: data.subjects
            ...data
          });
        }
      });
    }
  }
};

export default movieList;
