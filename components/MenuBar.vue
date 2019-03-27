
<template lang="pug">
   nav#menubar__wrapper
     div#menubar
       div
         nuxt-link(:to='{name: "index"}')
         p ホーム
       div
         nuxt-link(:to='{name: "index"}')
         p ためる
       div
         nuxt-link(:to='{name: "index"}')
         p ためる
       div
         nuxt-link(:to='{name: "index"}')
         p しばた
</template>

<style lang="stylus" scoped>
#menubar__wrapper
  width 100%
  height var(--height-menubar)
  background-color var(--color-darkblue)
  display flex
  justify-content center
  position relative
  z-index 1
  #menubar
    width 100%
    max-width 540px
    height var(--height-menubar)
    display flex
    align-items center
    justify-content space-around
    div
      height 100%
      a
        display block
        width 50px
        height 50px
        background-color orange
        color var(--color-white)
        text-decoration none
        border-radius 50%
        margin-top -20px
      p
        margin-top 5px

</style>
