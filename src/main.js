import Vue from 'vue'   //引入vue模块
import Vuex from 'vuex' //引入vuex模块
import App from './App'  //引入vue组件
import router from './router' // 引入路由配置文件
import { stat } from 'fs'
Vue.config.productionTip = false // 关闭生产模式下给出的提示
Vue.use(Vuex)
var store= new Vuex.Store({
  state:{
          list:[],
          count:0
  },
  mutations:{
    Gainlist(state)
    {
        if(localStorage.getItem('todos'))
        {
        state.list=JSON.parse(localStorage.getItem('todos'))
        }
         state.count=state.list.length
    },
    Addlist(state,todo)
    {
      state.list.push(todo)
      console.log(state.list)
      const parsed=JSON.stringify(state.list)
      localStorage.setItem('todos',parsed)
    },
    Removelist(state){
      for(var j =state.list.length-1;j>=0;j--)
      {
        if(state.list[j].show)
        {
          state.list.splice(j,1)
        }
      }
      const parsed=JSON.stringify(state.list)
      localStorage.setItem('todos',parsed)
    },
    remaining(state){
      state.count=state.list.length
      for(var i=0;i<state.list.length;i++)
      {
        if(state.list[i].show)
        {
          state.count=state.count-1
        }

      }
    }
    
    }





})
new Vue({  // 创建一个 Vue 的根实例
  el: '#app', //挂载id,这个实例下所有的内容都会在index.html 一个id为app的div下显示
  router, // 注入路由配置。
  template: '<App/>', //配置根模板 即打开页面显示那个组件
  components: { App }, // 注入组件
  store
})
