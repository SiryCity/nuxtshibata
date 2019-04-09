<template lang="pug">
div.description-card
  img(:src='card.src', alt='')
  span
    kana-ruby(
      v-if='card.kanas'
      v-for='(kana, i) in card.kanas'
      :kana='kana'
      :key='`${propKey}-${i}`'
    )
    span(v-if='card.mes') {{card.mes}}

</template>

<script>
import KanaRuby from '~/components/KanaRuby.vue'
export default {
  components:{
    KanaRuby
  },
  props: {
    card: Object,
    propKey: String
  },
}
</script>

<style lang="stylus" scoped>
.description-card
  width 100%
  min-height 200px
  display flex
  flex-direction column
  align-items center
  margin 70px 0
  img
    width 110px
    height auto
    margin-bottom -10px
  span
    text-align left
    line-height 200%
</style>
