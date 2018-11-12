import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import VueRouter from 'vue-router'
import dashboard from './dashboard.vue'
import details from './details.vue'
Vue.use(VueRouter)
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
const routes = [{ path: '/', component: dashboard },{ 
  
  path: '/campaigns/:id', component: details,
  props: { id: 0 }, name:'campaign' }];
 


  Vue.use(Element, { locale })
  const router = new VueRouter({
    routes,
    mode: 'history'
  })

new Vue({
  el: '#app',
  template: '<App/>',
  
  components: { App },
  data(){
    return{
    info:null,
   
    props:['id']
  }
  },
  render: h => h(App),
 
  router
}).$mount('#app')
