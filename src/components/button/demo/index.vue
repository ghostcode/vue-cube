<template>
    <div class="demo-button">
      <Button @click="handleClick">按钮（带事件）</Button>
      <Button :disabled="true" type="success" @click="handleClick">禁用按钮（带事件）</Button>
      <Button type="info">按钮</Button>
      <Button type="error">按钮</Button>
      <Button type="warning">按钮</Button>
      <br>
      <br>
      <Button>按钮</Button>
      <br>
      <br>
      <Button type="error" size="large">按钮</Button>
      <br>
      <br>
      <Button type="success" size="small">按钮</Button>
    </div>
</template>
<script>
import Button from '../button.vue'
export default {
    name: 'ButtonDemo',
    components:{
      Button
    },
    data() {
        return {

        }
    },
    methods: {
      handleClick(){
        console.log(111)
      }
    },
}
</script>
<style lang="less" scoped>
.demo-button{
  button{
    margin-right: 20px;
  }
}
</style>
