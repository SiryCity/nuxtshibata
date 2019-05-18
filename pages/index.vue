<template lang="pug">
  app-wrapper
    
    div.app__firstviewarea
      img(src='~/assets/shibata_logo_green.svg' alt='柴田アクティブストリート')
      p.app__message しばたアクティブストリート
      p.app__message--small 商店街たんけん & ポイントゲット

    div.message-box
        p.message-box__points
          | げんざい 
          span {{$store.state.saveData.pts}}
          |  ポイント
        nuxt-link(v-scroll-to="'#anchor'" to) ポイントをためるには??

    //- スタンプとQRコードへのリンクのボックス

    message-card(
      v-for='(card, i) in $store.getters["aboutasp/top"]'
      :card='card'
      :key='`description-card-top-${i}`'
      :propKey='`description-card-top-${i}`'
    )

      //- あんまり良くない書き方
      div#anchor.message-box(v-if='i === 2')
        nuxt-link(:to='{name: "map"}') ちずをひらく

      div.message-box(v-if='i === 3')
        nuxt-link(:to='{name: "stamp"}') スタンプをだす

      div.message-box(v-if='i === 4')
        nuxt-link(:to='{name: "camera"}') QRコードをさつえい

      div.message-box(v-if='i === 5')
        nuxt-link(:to='{name: "map"}') ちずでかくにん

</template>

<script>
import AppWrapper from '~/components/AppWrapper.vue'
import MessageCard from '~/components/MessageCard.vue'
export default {
  components:{
    AppWrapper,
    MessageCard,
  }
}
</script>


<style lang="stylus" scoped>

.app__firstviewarea
  width calc(90vw - 30px)
  height calc(90vw - 30px)
  max-width 520px
  max-height 520px
  background-color var(--color-brown)
  margin 70px 0 30px
  border 4px var(--color-lightgreen) dashed
  border-radius 7px
  box-shadow 0 0 0 10px var(--color-brown)

  display flex
  flex-direction column
  justify-content center
  font-size 120%
  img
    width 100%
    height 40%
    object-fit contain
    margin 50px 0 15px

.app__message
  width 100%
  height 25px
  display inline-block
  text-align center
  line-height 25px
.app__message--small
  width 100%
  height 25px
  font-size 14px
  display inline-block
  text-align center
  line-height 25px

.message-box
  width calc(100% - 20px)
  padding 10px
  background-color var(--color-brown)
  border-radius 7px
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items space-evenly

  p
    line-height 130%

  a
    width 200px
    margin 5px 0 0 calc(100% - 200px)
    height 25px
    line-height 100%
    font-size 12px
    border 1.5px var(--color-darkbrown) solid
    border-radius 7px
    text-align center
    color var(--color-darkbrown)
    text-decoration none
    display flex
    flex-direction column
    justify-content space-evenly
    align-items center
    
  .message-box__points
    width 100%
    text-align center
    margin 20px 0 15px
    span
      font-size 40px
      font-weight normal


</style>


