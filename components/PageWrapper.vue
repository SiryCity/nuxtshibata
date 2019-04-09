<template lang="pug">
  div.main__wrapper
    div.main 
      div.title-box(v-if='pageTitle')
        img(src='~/assets/shibata_logo_white.svg' :alt='pageTitle')
        h1 {{pageTitle}}
      slot
      div.copy &copy; 2019 Shibata Active Street
</template>

<script>
export default {
  props: ['copyright', 'pageTitle']
}
</script>


<style lang="stylus" scoped>
.main__wrapper
  width 100%
  height var(--static100vh-without-menubar)

  overflow scroll
  display flex
  justify-content center
  background-color rgba(0,0,0,.6)

  .main
    width 90%
    max-width 540px
    height auto
    display flex
    flex-direction column
    justify-content flex-start
    align-items center
    .title-box
      width 100%
      margin calc(var(--static100vh-without-menubar) / 3) 0 20px
      display flex
      flex-direction column
      justify-content center
      align-items center
      h1
        font-size 20px
        font-weight bold
      img
        width 100%
        height auto
  .copy
    margin 50px 0 10px
    font-weight bold
</style>
