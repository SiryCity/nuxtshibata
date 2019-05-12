<template lang="pug">
  app-wrapper

    div.app__firstviewarea__wrappper
      div.app__firstviewarea
        img(src='~/assets/shibata_logo_green.svg' alt='このアプリについて')
        p.app__message このアプリについて

    message-card(
      v-for='(card, i) in $store.getters["aboutasp/about"]'
      :card='card',
      :key='`description-card-about-${i}`'
      :propKey='`description-card-about-${i}`'
    )
    
    div.message-box
      h2 平成30年度
      div.students
        h3 情報学研究科
        h4 情報学専攻
        div.student-leader 総合 2年 水谷竜斗

        h3 情報デザイン学科
        h4 メディアデザイン専攻
        div イラスト 4年

        h3 情報システム学科
        h4 情報ネットワーク専攻
        div 企画 2年

    
    div.message-box
      h2 平成29年度
      div.students
        h3 情報学研究科
        h4 情報学専攻
        div.student-leader 総合 1年 水谷竜斗

        h3 情報学研究科
        h4 情報学専攻
        div イラスト 1年 日比野 晟正

        h3 情報デザイン学科
        h4 プロダクトデザイン専攻
        div イラスト 4年 石野 要
        div イラスト 4年 小池 朔弘
        div イラスト 4年 仙敷 絵理
        div イラスト 4年 點東 徳寛
        div イラスト 4年 林 このみ
        div イラスト 4年 松崎 涼太

        h3 情報デザイン学科
        h4 プロダクトデザイン専攻
        div 企画 4年 原田研究室
        div 撮影 2年 伊藤 健汰

        h3 情報システム学科
        h4 情報ネットワーク専攻
        div 企画 1年 松波 聡一

        h3 建築学科
        h4 建築専攻
        div 調査 4年 武藤研究室
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

h2
  font-size 20px
  margin-top 50px
.students
  width 100%
  height 120px
  margin 10px 0
  border-top 2px solid var(--color-darkbrown)
  border-bottom 2px solid var(--color-darkbrown)
  box-sizing border-box
  overflow scroll
  text-align left
  display flex
  flex-direction column
  align-items flex-start
  padding-bottom 20px
  h3
    font-size 18px
    margin-top 30px
  h4
    font-size 18px
    margin 10px 0
  .student-leader
    font-size 18px



.title-box
  width 100%
  margin calc(var(--static100vh-without-menubar) / 3) 0 20px
  display flex
  flex-direction column
  justify-content center
  align-items center
  h1
    font-size 20px
  img
    width 100%
    height auto


.message-box
  width calc(100% - 20px)
  padding 10px
  background-color var(--color-brown)
  border-radius 7px
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items space-evenly

  margin-top 10px
</style>


