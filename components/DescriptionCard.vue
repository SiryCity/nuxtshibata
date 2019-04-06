<template lang="pug">
div.description-card
  img(:src='card.src', alt='')
  span
    kana-ruby(
      v-for='(kana, i) in card.kanas'
      :kana='kana'
      :key='`${propKey}-${i}`'
    )

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
  margin 30px 0
  img
    width 120px
    height 120px
  span
    text-align left
</style>
