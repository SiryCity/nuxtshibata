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
    slot
    
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
  width calc(100% - 20px)
  display flex
  flex-direction column
  align-items center
  padding 10px
  margin 30px 0
  background-color var(--color-brown)
  border-radius 7px
  img
    width 110px
    height auto
    margin-bottom 10px
  span
    text-align left
    line-height 200%
</style>
