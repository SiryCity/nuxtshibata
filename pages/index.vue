<template lang="pug">
  section.stamparea__wrapper
    div.stamparea(@touchstart='startToStamp') {{$store.state.stamp.pts}}
      
</template>

<script>

export default {
  methods:{
    startToStamp(e){this.$store.dispatch('stamp/startToStamp', e)}
  }
}

</script>

<style lang="stylus" scoped>
.stamparea__wrapper
  width 100%
  height 100%
  display flex
  flex-direction column
  justify-content space-around
  align-items center
.stamparea
  width 80vmin
  height 80vmin
  line-height 80vmin
  background-color #bbb
  text-align center
  font-size 200%
</style>


