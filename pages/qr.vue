<template lang="pug">
app-wrapper
  div.stamp__message QRコードをみつけたら
  div.stamp__message さつえいしてポイントゲット!
  div.stamparea(
    @touchstart='beginShooting'
  )
    div.stamp__message カメラをきどう

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
.stamparea
  width 80vmin
  height 80vmin
  text-align center
  font-size 120%
  border #222 solid 7px
  box-sizing border-box
  background linear-gradient(63deg, #914f2b 23%, transparent 23%) 7px 0,
    linear-gradient(63deg, transparent 74%, #914f2b 78%),
    linear-gradient(63deg, transparent 34%, #914f2b 38%, #914f2b 58%, transparent 62%),
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


