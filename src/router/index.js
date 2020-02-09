import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ImageDetail from '@/components/ImageDetail'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/image/:id',
      component: ImageDetail
    }
  ]
})

export default router