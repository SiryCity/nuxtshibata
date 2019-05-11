<template lang="pug">
  page-wrapper
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
</style>


