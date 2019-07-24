import Vue from 'vue'
import Welcome from './Welcome.vue'

const Components = {
  Welcome
}

Object.keys(Components).forEach(name=>{
  Vue.component(name,Components[name])
})

export default Components