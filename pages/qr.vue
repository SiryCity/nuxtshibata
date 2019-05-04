<template lang="pug">
app-wrapper
  p.stamp__message QRコードをみつけたら
  br
  | さつえいしてポイントゲット!
  div.stamparea__wrappper
    div.stamparea(
      @touchstart='beginShooting'
    )
      p.stamp__message カメラをきどう

</template>

<script>
import AppWrapper from '~/components/AppWrapper.vue'
export default {
  components:{
    AppWrapper
  },
  methods:{
    beginShooting(e){this.$store.dispatch('camera/beginShooting', e)}
  },
}

</script>

<style lang="stylus" scoped>
.stamparea__wrappper
  width 90vw
  height 90vw
  max-width var(--static100vh-without-menubar)
  max-height var(--static100vh-without-menubar)
  max-width 540px
  max-height 540px
  background-color var(--color-brown)
  border-radius 10px
  margin 10px 0
  line-height 90%
.stamparea
  width calc(100% - 20px)
  height calc(100% - 20px)
  text-align center
  font-size 120%

  box-sizing border-box
  background-size 16px 48px
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin 10px
  border 4px var(--color-darkbrown) dashed
  border-radius 7px

.stamp__message
  line-height 90%
</style>
