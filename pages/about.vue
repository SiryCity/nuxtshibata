<template lang="pug">
  page-wrapper(:pageTitle='"プロジェクト"')
    description-card(
      v-for='(card, i) in $store.getters["aboutasp/about"]'
      :card='card',
      :key='`description-card-about-${i}`'
      :propKey='`description-card-about-${i}`'
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
</style>


