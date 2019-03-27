<template lang="pug">
  main-wrapper
    div.first-view
      img(src='~/assets/shibata_logo_white.svg' alt='')
      h1 柴田アクティブストリート
      div お買い物でためる
      nuxt-link(:to='{name: "stamp"}') スタンプをおしてもらう
      nuxt-link(:to='{name: "map"}') スタンプのたまるお店をさがす
      div 探検でためる
      nuxt-link(:to='{name: "map"}') QRコードのある場所をさがす
      div 探検でためる
      div 探検でためる
      div 探検でためる
      div 探検でためる
      div 探検でためる
      div 探検でためる
      div 探検でためる
</template>


<script>
import MainWrapper from '~/components/MainWrapper.vue'
export default {
  components:{
    MainWrapper
  }
}
</script>


<style lang="stylus" scoped>
.first-view
  display flex
  flex-direction column
  justify-content flex-start
  text-align center
  font-weight bold
    
  img
  h1
  div
  a
    margin 10px 0
    padding 10px
  
  a
    color var(--color-darkblue)
    background-color var(--color-white)
    text-decoration none
    border-radius 5px
</style>


