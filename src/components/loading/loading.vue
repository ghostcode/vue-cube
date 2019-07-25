<template>
  <div class="cube-loading">
    <span></span>
    <span></span>
    <span></span>
  </div>
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
  .cube-loading{
    display: inline-block;
    span{
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: #3498db;
      margin: 20px 2px 0;
    }
    span:nth-child(1){
      animation: bounce 1s ease-in-out infinite;
    }
    span:nth-child(2){
      animation: bounce 1s ease-in-out 0.33s infinite;
    }
    span:nth-child(3){
      animation: bounce 1s ease-in-out 0.66s infinite;
    }
  }

  @keyframes bounce{
    0%, 75%, 100%{
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }

    25%{
      -webkit-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
  }
</style>
