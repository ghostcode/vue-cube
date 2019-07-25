import Vue from 'vue'
import Button from './button/index'
import Loading from './loading/index'

const Components = {
  Button,
  Loading
}

Object.keys(Components).forEach(name=>{
  Vue.component(name,Components[name])
})

export default Components