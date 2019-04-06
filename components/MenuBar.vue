
<template lang="pug">
   nav#menubar__wrapper
     div#menubar
       div
         nuxt-link(:to='{name: "index"}'): img(src='~/assets/shibata_logo_white.svg')
         p ホーム
       div
         nuxt-link(:to='{name: "map"}'): img(src='~/assets/menu-icon-map.svg')
         p ちず
       div
         nuxt-link(:to='{name: "stamp"}'): img(src='~/assets/menu-icon-stamp.svg')
         p スタンプ
       div
         nuxt-link(:to='{name: "qr"}'): img(src='~/assets/menu-icon-qr.svg')
         p QRコード
       div
         nuxt-link(:to='{name: "about"}'): img(src='~/assets/shibata_logo_white.svg')
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
    div
      width 25%
      height 100%
      display flex
      flex-direction column
      justify-content center
      align-items center

      a
        display block
        width 50px
        height 50px
        background-color var(--color-darkblue)
        color var(--color-white)
        text-decoration none
        border-radius 50%
        margin-top -20px
        display flex
        justify-content center
        align-items center
        img
          width 64%
          height 64%
      p
        font-size 14px

</style>
