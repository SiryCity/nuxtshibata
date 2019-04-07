<template lang="pug">
  div.description-window__wrapper(
    :class='{"description-window__wrapper--hidden": !$store.state.description.isOpen}'
    @click='$store.dispatch("description/leaveDescription")'
  )
    div.description-window(
      :class='{"description-window--hidden": !$store.state.description.isOpen}'
    )
      img(:src='$store.state.description.chosenDescription ? $store.state.description.chosenDescription.src : ""')
      div.description-window__box
        h2 {{$store.state.description.chosenDescription ? $store.state.description.chosenDescription.name : ''}}
        p {{$store.state.description.chosenDescription ? $store.state.description.chosenDescription.description : ''}}
        div {{$store.state.description.chosenDescription ? $store.state.description.chosenDescription.author : ''}}
</template>

<style lang="stylus" scoped>
.description-window__wrapper--hidden
  visibility hidden
  opacity 0
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
  transition-duration .2s
  transition-property opacity
  color var(--color-white)

.description-window--hidden
  margin-bottom -20px
.description-window
  width 90vmin
  height 90vmin
  background-color rgba(0,0,0,.1)
  position relative
  transition-duration .2s
  transition-property margin-bottom
  border-radius 5px
  img
    width 100%
    height 100%
    position absolute
    top 0
    left 0
  .description-window__box
    width 100%
    height 30%
    position absolute
    bottom 0
    left 0
    background-color rgba(0,0,0,.7)
</style>
