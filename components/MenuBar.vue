
<template lang="pug">
   nav#menubar__wrapper
     div#menubar
      nuxt-link(:to='{name: "index"}')
        img(src='~/assets/shibata_logo_green.svg')
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
        img(src='~/assets/shibata_logo_green.svg')
        p メンバー
</template>


<style lang="stylus" scoped>
#menubar__wrapper
  width 100%
  height var(--height-menubar)
  display flex
  justify-content center
  position fixed
  bottom 0
  box-sizing border-box
  border-top 4px var(--color-lightgreen) dashed
  #menubar
    width 100%
    max-width 540px
    height 100%
    display flex
    align-content space-evenly
    justify-content space-around
    a
      width 20%
      height 100%
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      text-decoration none
      color var(--color-darkbrown)
      img
        width 60%
        height 30px
        object-fit contain
      p
        height 10px
        font-size 12px

</style>
