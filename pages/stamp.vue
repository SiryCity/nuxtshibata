<template lang="pug">
app-wrapper
  p.app__message お店でお買い物をしたら
  p.app__message この画面をみせてね!
  div.app__stamparea__wrappper
    div.app__stamparea(
      @touchstart='pressTheStamp'
      @touchend='pressTheStamp'
    )
      img(src='~/assets/menu-icon-stamp.svg')
      p.app__message ここにスタンプを
      p.app__message おしてもらう

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
.app__stamparea__wrappper
  width 90vw
  height 90vw
  max-width 540px
  max-height 540px
  background-color var(--color-brown)
  border-radius 10px
  margin 10px 0
.app__stamparea
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

.app__message
  width 100%
  height 25px
  display inline-block
  text-align center
  line-height 25px

</style>


