<template lang="pug">
app-wrapper
  p.stamp__message お店でお買い物をしたら
  br
  | この画面をみせてね!
  div.stamparea__wrappper
    div.stamparea(
      @touchstart='pressTheStamp'
      @touchend='pressTheStamp'
    )
      img(src='~/assets/menu-icon-stamp.svg')
      p.stamp__message ここにスタンプを
      br
      | おしてもらう

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
.stamparea__wrappper
  width 90vw
  height 90vw
  max-width 540px
  max-height 540px
  background-color var(--color-brown)
  border-radius 10px
  margin 10px 0
  line-height 90%
.stamparea
  width calc(100% - 20px)
  height calc(100% - 20px)
  margin 10px
  text-align center
  font-size 120%

  box-sizing border-box
  background-size 16px 48px
  display flex
  flex-direction column
  justify-content center
  align-items center
  border 4px var(--color-darkbrown) dashed
  border-radius 7px
  img
    width 30%
    height 30%
    margin-bottom 15px

.stamp__message
  line-height 90%
</style>


