<template>
    <component
      :is="tag"
      :disabled="disabled"
      :class="btnClass"
      @click="onClick"
    >
      <span><slot></slot></span>
    </component>
</template>
<script>
export default {
    name: 'Button',
    props:{
      disabled:Boolean,
      tag:{
        type:String,
        default:'button'
      },
      type:{
        type:String,
        default:'default' // default error success info warning
      },
      size:{
        type:String,
        default:'normal'// large normal small
      }
    },
    data() {
        return {

        }
    },
    computed: {
      btnClass(){
        return [
          'cube-button',
          'cube-button--' + this.type,
          'cube-button--' + this.size,
          {'cube-button--disabled':this.disabled}
        ]
      }
    },
    methods: {
      onClick(event){
        if(!this.disabled){
          this.$emit('click',event)
        }
      }
    },
}
</script>
<style lang="less" scoped>
  .cube-button{
    position: relative;
    padding: 0;
    display: inline-block;
    height: 44px;
    line-height: 42px;
    border-radius: 2px;
    box-sizing: border-box;
    font-size: 16px;
    text-align: center;
    -webkit-appearance: none;
    -webkit-text-size-adjust: 100%;
    &--default{
      color:#323232;
      border:1px solid #ebedf0;
    }
    &--error{
      color:#fff;
      border:1px solid #f44;
      background-color: #f44;
    }
    &--success{
      color:#fff;
      background-color: #07c160;
      border:1px solid #07c160;
    }
    &--info{
      color:#fff;
      background-color: #1989fa;
      border:1px solid #1989fa;
    }
    &--warning{
      color:#fff;
      background-color: #ff976a;
      border:1px solid #ff976a;
    }
    &--disabled{
      opacity: 0.5;
    }
    &--normal{
      padding:0 15px;
      font-size:14px;
    }
    &--large{
      width:100%;
      height:50px;
      line-height: 48px;
    }
    &--small{
      min-width: 60px;
      height:30px;
      line-height: 28px;
      font-size: 12px;
      padding:0 8px;
    }
  }
</style>
