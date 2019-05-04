<template lang="pug">
  page-wrapper(:pageTitle='"このアプリについて"')
    description-card(
      v-for='(card, i) in $store.getters["aboutasp/about"]'
      :card='card',
      :key='`description-card-about-${i}`'
      :propKey='`description-card-about-${i}`'
    )

    
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
import PageWrapper from '~/components/PageWrapper.vue'
import DescriptionCard from '~/components/DescriptionCard.vue'
export default {
  components:{
    PageWrapper,
    DescriptionCard,
  }
}
</script>

<style lang="stylus" scoped>
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
  z-index 100
  position relative
  padding-bottom 20px
  h3
    font-size 18px
    margin-top 30px
  h4
    font-size 18px
    margin 10px 0
  .student-leader
    font-size 18px
</style>


