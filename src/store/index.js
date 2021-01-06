import Vuex from 'vuex'
import Vue from 'vue'
import home from '@pages/home/store'

Vue.use(Vuex)

let store = new Vuex.Store({
  state:{},
  getters:{},
  mutations:{},
  actions:{},
  modules:{
    home
  }
})

export default store