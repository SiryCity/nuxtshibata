<template lang="pug">
  page-wrapper(:pageTitle='"あそびかた"')
    div.current-points
      | 現在
      span {{$store.state.stamp.pts}}
      | ポイント

    description-card(
      v-for='(card, i) in $store.getters["aboutasp/top"]'
      :card='card'
      :key='`description-card-top-${i}`'
      :propKey='`description-card-top-${i}`'
    )

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
.current-points
  margin 60px 0 20px
  span
    font-size 300%
    font-weight normal
    margin 0 5px
</style>


