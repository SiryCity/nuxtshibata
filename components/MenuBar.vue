
<template lang="pug">
   nav#menubar__wrapper
     div#menubar
      nuxt-link(:to='{name: "index"}')
        img(src='~/assets/shibata_logo_white.svg')
        p ホーム
      nuxt-link(:to='{name: "map"}')
        img(src='~/assets/menu-icon-map.svg')
        p ちず
      nuxt-link(:to='{name: "stamp"}')
        img(src='~/assets/menu-icon-stamp.svg')
        p スタンプ
      nuxt-link(:to='{name: "qr"}')
        img(src='~/assets/menu-icon-qr.svg')
        p QRコード
      nuxt-link(:to='{name: "about"}')
        img(src='~/assets/shibata_logo_white.svg')
        p せいさく
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
    a
      width 25%
      height 100%
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      text-decoration none
      color var(--color-white)
      background-color var(--color-darkblue)
      img
        width 50%
        height 50%
      p
        font-size 14px
        font-weight bold

</style>
