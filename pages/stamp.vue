<template lang="pug">
app-wrapper
  div.stamp__message お店でお買い物をしたら
  div.stamp__message この画面をみせてね!
  div.stamparea(
    @touchstart='pressTheStamp'
    @touchend='pressTheStamp'
  )
    div.stamp__message ここにスタンプを
    div.stamp__message おしてもらう

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
  text-align center
  font-size 120%
  border #222 solid 7px
  box-sizing border-box
  background linear-gradient(63deg, #23717a 23%, transparent 23%) 7px 0,
    linear-gradient(63deg, transparent 74%, #23717a 78%),
    linear-gradient(63deg, transparent 34%, #23717a 38%, #23717a 58%, transparent 62%),
    #222
  background-size 16px 48px
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin 20px 0

.stamp__message
  margin 2vmin 0
</style>


