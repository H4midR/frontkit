import Vue from 'vue'
import Router from 'vue-router'

// add your components here
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    }
  ]
})
