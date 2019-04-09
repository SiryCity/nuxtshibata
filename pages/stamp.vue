<template lang="pug">
app-wrapper
  div.stamparea(@touchstart='pressTheStamp' @touchend='pressTheStamp') ここにスタンプをおす

</template>

<script>
import AppWrapper from '~/components/AppWrapper.vue'
export default {
  components:{
    AppWrapper
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
  text-align center
  font-size 120%
  letter-spacing 3px
  font-weight bold
  border #111 solid 7px
  box-sizing border-box
  background linear-gradient(63deg, #444 23%, transparent 23%) 7px 0,
    linear-gradient(63deg, transparent 74%, #444 78%),
    linear-gradient(63deg, transparent 34%, #444 38%, #444 58%, transparent 62%),
    #111
  background-size 16px 48px
</style>


