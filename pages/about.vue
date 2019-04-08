<template lang="pug">
  main-wrapper
    description-card(
      v-for='(card, i) in $store.getters["aboutasp/about"]'
      :card='card',
      :key='`description-card-about-${i}`'
      :propKey='`description-card-about-${i}`'
    )
</template>

<script>
import MainWrapper from '~/components/MainWrapper.vue'
import DescriptionCard from '~/components/DescriptionCard.vue'
export default {
  components:{
    MainWrapper,
    DescriptionCard,
  }
}
</script>

<style lang="stylus" scoped>
</style>


