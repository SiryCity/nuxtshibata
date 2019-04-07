<template lang="pug">
  div#root
    leaflet-area
    menu-bar
    nuxt
    description-window
</template>

<script>

import MenuBar from '~/components/MenuBar.vue'
import LeafletArea from '~/components/LeafletArea.vue'
import DescriptionWindow from '~/components/DescriptionWindow.vue'
export default {
  components:{
    MenuBar,
    LeafletArea,
    DescriptionWindow
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
:root
  --static100vh 100vh
  --color-darkblue #00175A
  --color-white #eee
  --color-black #222
  --height-menubar 60px

// これやっていいか不明
body
#__nuxt
#__layout
  position relative
  z-index -2

#root
  width 100%
  height var(--static100vh, 100vh)
  display flex
  flex-direction column
  align-items center
  position relative
  z-index -2

</style>

