<template lang="pug">
  main-wrapper
    div.first-view
      img(src='~/assets/shibata_logo_white.svg' alt='')
      h1 柴田アクティブストリート
      //-
        div お買い物でためる
        nuxt-link(:to='{name: "stamp"}') スタンプをおしてもらう
        nuxt-link(:to='{name: "map"}') スタンプのたまるお店をさがす
        div 探検でためる
        nuxt-link(:to='{name: "map"}') QRコードのある場所をさがす
        div 探検でためる
        div {{$store.state.stamp.pts}}

      description-card(
        v-for='(card, i) in $store.getters["aboutasp/aboutasp"]'
        :card='card',
        :key='`description-card-${i}`'
        :propKey='`description-card-${i}`'
      )

</template>


<script>
import MainWrapper from '~/components/MainWrapper.vue'
import DescriptionCard from '~/components/DescriptionCard.vue'
export default {
  components:{
    MainWrapper,
    DescriptionCard,
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
  
  a
    color var(--color-darkblue)
    background-color var(--color-white)
    text-decoration none
    border-radius 5px
</style>


