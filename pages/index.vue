<template lang="pug">
  app-wrapper
    
    div.app__firstviewarea__wrappper
      div.app__firstviewarea
        img(src='~/assets/shibata_logo_green.svg' alt='柴田アクティブストリート')
        p.app__message しばたアクティブストリート
        p.app__message--small 商店街たんけん & ポイントゲット

    div.message-box
        p.message-box__points
          span {{$store.state.saveData.pts}}
          | ポイント
        a.messag-box__links--small(href='#')
          div.messag-box__links ポイントをためるには??

    -// スタンプとQRコードへのリンクのボックス
    div.message-box
      nuxt-link(:to='{name: "stamp"}')
        img(src='~/assets/menu-icon-stamp.svg')
        div.messag-box__links スタンプ
      nuxt-link(:to='{name: "camera"}')
        img(src='~/assets/menu-icon-camera.svg')
        div.messag-box__links QRコード

    message-card(
      v-for='(card, i) in $store.getters["aboutasp/top"]'
      :card='card'
      :key='`description-card-top-${i}`'
      :propKey='`description-card-top-${i}`'
    )

</template>

<script>
import AppWrapper from '~/components/AppWrapper.vue'
import PageWrapper from '~/components/PageWrapper.vue'
import MessageCard from '~/components/MessageCard.vue'
export default {
  components:{
    AppWrapper,
    PageWrapper,
    MessageCard,
  }
}
</script>


<style lang="stylus" scoped>

.app__firstviewarea__wrappper
  width 90vw
  height 90vw
  max-width 540px
  max-height 540px
  background-color var(--color-brown)
  border-radius 10px
  margin 60px 0 10px
.app__firstviewarea
  width calc(100% - 20px)
  height calc(100% - 20px)
  margin 10px
  text-align center
  font-size 120%

  box-sizing border-box
  background-size 16px 48px
  display flex
  flex-direction column
  justify-content center
  align-items center
  border 4px var(--color-lightgreen) dashed
  border-radius 7px
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
  margin 10px 0
  background-color var(--color-brown)
  border-radius 7px
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items space-evenly

  p
    line-height 130%

  a
    width calc(50% - 10px)
    height 58px
    border 2px var(--color-darkbrown) dashed
    border-radius 7px
    text-align center
    color var(--color-darkbrown)
    text-decoration none
    display flex
    flex-direction column
    justify-content space-evenly
    align-items center
    img
      width 30px
      height 30px
    .messag-box__links
      height 10px
      font-size 12px
  .messag-box__links--small
    width 100%
    height 25px
  .message-box__points
    width 100%
    text-align center
    margin 10px 0
    span
      font-size 40px
      font-weight normal
      margin-right 3px 


</style>


