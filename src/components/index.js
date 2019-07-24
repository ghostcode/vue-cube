import Vue from 'vue'
import Tab from './Tab.vue'

const Components = {
  Tab
}

Object.keys(Components).forEach(name=>{
  Vue.component(name,Components[name])
})

export default Components