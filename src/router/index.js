import vueRouter from 'vue-router'
import Home from '@pages/home'
import Vue from 'vue'
import Self from '@pages/self'
import Vuepage from '@pages/Vue'
import Reactpage from '@pages/React'
import Componentspage from '@pages/myComponents'

Vue.use(vueRouter)

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/self",
    component:Self
  },
  {
    path:"/Vue",
    component:Vuepage
  },
  {
    path:"/React",
    component:Reactpage
  },
  {
    path:"/Components",
    component:Componentspage
  }
]

const router = new vueRouter({
  routes
})

export default router;