
<template lang="pug">
   nav#menubar__wrapper
     div#menubar
      nuxt-link(:to='{name: "index"}')
        img(src='~/assets/menu-icon-home.svg')
        p ホーム
      nuxt-link(:to='{name: "map"}')
        img(src='~/assets/menu-icon-map.svg')
        p ちず
      nuxt-link(:to='{name: "stamp"}')
        img(src='~/assets/menu-icon-stamp.svg')
        p スタンプ
      nuxt-link(:to='{name: "qr"}')
        img(src='~/assets/menu-icon-camera.svg')
        p QRコード
      nuxt-link(:to='{name: "about"}')
        img(src='~/assets/menu-icon-member.svg')
        p アプリ
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
  background-color var(--color-brown)
  #menubar
    width 100%
    margin-top 5px
    height calc(100% - 5px)
    border-top 2px var(--color-lightgreen) dashed
    display flex
    align-content space-evenly
    justify-content center
    a
      width 20%
      max-width 108px
      height 100%
      display flex
      flex-direction column
      justify-content space-evenly
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
