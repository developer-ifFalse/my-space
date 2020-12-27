import vueRouter from 'vue-router'
import Home from '@pages/home'

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home
  }
]

const router = new vueRouter({
  routes
})

export default router;