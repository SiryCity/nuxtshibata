
<template lang="pug">
app-wrapper
  p.app__message QRコードをみつけたら
  p.app__message さつえいしてポイントゲット!
  
  div.app__cameraarea__wrappper

    //- 最初の画面
    div.app__cameraarea(
      :class='{"app__cameraarea--hidden": $store.state.saveData.display !== "initial"}'
      @touchstart='checkCameraPermission'
    )
      img(src='~/assets/menu-icon-camera.svg')
      p.app__message カメラをきどう

    //- 撮影中
    video.app__cameraarea.app__cameraarea--hidden#video(autoplay='')

    canvas.app__cameraarea#canvas(
      :class='{"app__cameraarea--hidden": $store.state.saveData.display !== "video"}'
    )

    //- 拒否された時
    div.app__cameraarea(
      :class='{"app__cameraarea--hidden": $store.state.saveData.display !== "reject"}'
      @touchstart='checkCameraPermission'
    )
      img(src='~/assets/menu-icon-camera.svg')
      p.app__message スマホのせっていから
      p.app__message さつえいをきょかしてね!

</template>

<script>
import AppWrapper from '~/components/AppWrapper.vue'
export default {
  components:{
    AppWrapper
  },
  methods:{
    checkCameraPermission(e){this.$store.dispatch('camera/checkCameraPermission', e)},
  },
}

</script>

<style lang="stylus" scoped>
#canvas
  width 100%
  height 100%
  border unset
.app__cameraarea__wrappper
  width 90vw
  height 90vw
  max-width 540px
  max-height 540px
  background-color var(--color-brown)
  border-radius 10px
  margin 10px 0
  
  position relative
.app__cameraarea
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
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  margin auto
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

.app__cameraarea--hidden
  visibility hidden
  pointer-events none
</style>
