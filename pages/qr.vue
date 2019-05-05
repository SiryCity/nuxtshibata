<template lang="pug">
app-wrapper
  p.camera__message QRコードをみつけたら
  br
  | さつえいしてポイントゲット!
  div.cameraarea__wrappper
    div.cameraarea(
      :class='{"cameraarea--hidden": $store.state.saveData.display !== "initial"}'
      @touchstart='checkCameraPermission'
    )
      img(src='~/assets/menu-icon-camera.svg')
      p.camera__message カメラをきどう

    video.cameraarea#video(
      autoplay=''
      :class='{"cameraarea--hidden": $store.state.saveData.display !== "video"}'
    )

    div.cameraarea(
      :class='{"cameraarea--hidden": $store.state.saveData.display !== "reject"}'
      @touchstart='checkCameraPermission'
    )
      img(src='~/assets/menu-icon-camera.svg')
      p.camera__message せっていから
      br
      | カメラをきょかしてね!

</template>

<script>
import AppWrapper from '~/components/AppWrapper.vue'
export default {
  components:{
    AppWrapper
  },
  methods:{
    checkCameraPermission(e){this.$store.dispatch('camera/checkCameraPermission', e)}
  },
}

</script>

<style lang="stylus" scoped>
.cameraarea__wrappper
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
  position relative
.cameraarea
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
  top 10px
  left 10px
  border 4px var(--color-darkbrown) dashed
  border-radius 7px
  img
    width 30%
    height 30%
    margin-bottom 15px

.camera__message
  line-height 90%

.cameraarea--hidden
  visibility hidden
  pointer-events none
</style>
