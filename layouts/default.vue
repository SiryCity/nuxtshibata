<template lang="pug">
  div#root(:class='{"root--loaded": $store.state.mounted.isLoaded}')
    leaflet-area
    nuxt
    point-area
    menu-bar
    description-window
</template>

<script>

import LeafletArea from '~/components/LeafletArea.vue'
import PointArea from '~/components/PointArea.vue'
import MenuBar from '~/components/MenuBar.vue'
import DescriptionWindow from '~/components/DescriptionWindow.vue'
export default {
  components:{
    LeafletArea,
    PointArea,
    MenuBar,
    DescriptionWindow
  },
  mounted(){
    this.$store.dispatch('mounted/setStatic100vh')
    this.$store.commit('mounted/visiblePointArea')
    this.$store.dispatch('camera/returnDisplay')
    document.addEventListener('visibilitychange', () => {
      this.$store.commit('stamp/resetChallenges')
    })
  }
}
</script>

<style lang="stylus">

:root
  --static100vh 100vh
  --height-menubar 65px
  --static100vh-without-menubar calc(var(--static100vh) - var(--height-menubar))

  --color-darkblue #00175A
  --color-white #eee
  --color-black #222

  --color-lightbrown oldlace // 背景色 超薄い茶色
  --color-lightgreen rgb(51, 153, 51) // アイコンの色普通の緑
  --color-darkbrown rgb(104, 63, 8)
  --color-darkgreen rgb(6, 56, 16)
  --color-brown rgb(237, 211, 166)

  --color-bg rgba(253, 245, 230, .8)


html
  font-family "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box
  background-color var(--color-lightbrown)
  color var(--color-darkbrown)
  font-weight bold
*
*before
*after
  box-sizing border-box
  margin 0
body
  margin 0

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
  justify-content center
  position relative
  z-index -2
  overflow hidden
  visibility hidden
  opacity 0
  transition-duration .4s
  transition-property opacity, visibility

.root--loaded
  visibility visible !important
  opacity 1 !important
</style>

