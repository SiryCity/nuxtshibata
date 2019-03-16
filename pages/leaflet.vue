<template lang="pug">
  div.test
</template>

<script>
import LeafletArea from '~/components/LeafletArea.vue'
export default {
  components: {
    LeafletArea
  }
}
</script>

<style lang="stylus">
.test
  width 100vw
  height var(--static100vh, 100vh)
</style>