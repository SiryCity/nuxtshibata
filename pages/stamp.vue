<template lang="pug">
main-wrapper
  section.stamparea__wrapper
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


