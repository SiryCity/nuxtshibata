<template lang="pug">
main-wrapper
  div.stamparea(@touchstart='pressTheStamp' @touchend='pressTheStamp') {{$store.state.stamp.pts}}

</template>

<script>
import MainWrapper from '~/components/MainWrapper.vue'
export default {
  components:{
    MainWrapper
  },
  methods:{
    pressTheStamp(e){this.$store.dispatch('stamp/pressTheStamp', e)}
  },
}

</script>

<style lang="stylus" scoped>
.stamparea
  width 80vmin
  height 80vmin
  line-height 80vmin
  background-color #bbb
  text-align center
  font-size 200%
  margin-top calc((var(--static100vh) - var(--height-menubar)) / 2 - 40vmin)
</style>


