<template lang="pug">
  div.description-window__wrapper(
    :class='{"description-window__wrapper--visible": $store.state.description.isOpen}'
    @click='$store.dispatch("description/leaveDescription")'
  )
</template>

<style lang="stylus" scoped>
.description-window__wrapper
  width 100vw
  height var(--static100vh)
  position absolute
  left 0
  top 0
  background-color rgba(0, 0, 0, .3)
  display flex
  justify-content center
  align-items center
  z-index 100
  visibility hidden

.description-window__wrapper--visible
  visibility visible
</style>
