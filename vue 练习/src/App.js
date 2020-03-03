// 新建一个组件
var template = `
<div>
    <header>
        <router-link :to="{name:'home'}">首页</router-link>
        <router-link :to="{name:'movie-list'}">电影页</router-link>
        <p style="float:right;margin: 0 20px 0 0;line-height:50px;color:#fff">当前在线人数：{{ number }}</p>
    </header>
    <router-view/>
</div>

`;

// 导出一个组件配置对象
export default {
  template,
  computed: Vuex.mapState ("online",["number"]),
  methods:{
      back(){
          this.$router.back();
      }
  }
};
