<template>

  <div class="cube-toast">

  </div>
</template>
<script>
export default {
    name: 'Toast',
    props:{

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
  .cube-toast{

  }
</style>
