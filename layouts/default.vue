<template lang="pug">
  div#root
    main#main
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
    
    document.addEventListener('visibilitychange', () => {
      this.$store.commit('stamp/resetChallenges')
    })
  }
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
  background-color var(--color-darkblue)
  color var(--color-white)
*
*before
*after
  box-sizing border-box
  margin 0
body
  margin 0
#root
  display flex
  flex-direction column
  align-items center
  position relative
:root
  --static100vh 100vh
  --color-darkblue #00175A
  --color-white #eee
  --color-black #222

#main
  width 100%
  height var(--static100vh, 100vh)
  display flex
  justify-content center
  overflow scroll

</style>

