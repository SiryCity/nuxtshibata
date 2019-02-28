<template lang="pug">
  v-app#root
    nuxt
    menu-bar
</template>

<script>

import MenuBar from '~/components/MenuBar.vue'

export default {
  components:{
    MenuBar
  },
  mounted(){
    this.$store.dispatch('mounted/setStatic100vh')
  },
}
</script>

<style lang="stylus">
html
  font-family "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box
*
*before
*after
  box-sizing border-box
  margin 0
body
  margin 0
:root
  --static100vh 100vh
#root
  display flex
  flex-direction column
  align-items center

.pages
  width 100%
  height calc(var(--static100vh) - 60px)
  background-color #ddd
  display flex
  justify-content center
  overflow scroll

.pages__wrapper
  width 100%
  height 100%
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  overflow scroll
  
</style>

