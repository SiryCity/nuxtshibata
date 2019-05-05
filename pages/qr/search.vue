
<template lang="pug">
app-wrapper
  p.search__message ようかいがちかくにいるかも?
  br
  | もっとさがしてみよう!
  
  div.searcharea__wrappper
    div.searcharea
      img(src='~/assets/menu-icon-camera.svg')
      p.search__message さがす{{$route.query.id}}

</template>

<script>
import AppWrapper from '~/components/AppWrapper.vue'
export default {
  components:{
    AppWrapper
  },
}

</script>

<style lang="stylus" scoped>
#canvas
  width 100%
  height 100%
  border unset
.searcharea__wrappper
  width 90vw
  height 90vw
  max-width 540px
  max-height 540px
  background-color var(--color-brown)
  border-radius 10px
  margin 10px 0
  line-height 90%
.searcharea
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

.search__message
  line-height 90%
</style>
