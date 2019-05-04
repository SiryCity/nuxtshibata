<template lang="pug">
  div.description-window__bg(
    :class='{"description-window__bg--hidden": !$store.state.description.isOpen}'
    @click='$store.dispatch("description/leaveDescription")'
  )
    div.description-window__wrapper(
      :class='{"description-window__wrapper--hidden": !$store.state.description.isOpen}'
    )
      img(:src='$store.state.description.chosenDescription ? $store.state.description.chosenDescription.src : ""')
      div.description-window__box__wrapper
        div.description-window__box
          a(
            :href='$store.state.description.chosenDescription && $store.state.description.chosenDescription.url'
            v-if='$store.state.description.chosenDescription && $store.state.description.chosenDescription.url'
          )
            img(src='~/assets/link.svg')
          h2 {{$store.state.description.chosenDescription ? $store.state.description.chosenDescription.name : ''}}
          p {{$store.state.description.chosenDescription ? $store.state.description.chosenDescription.description : ''}}
          div by {{$store.state.description.chosenDescription ? $store.state.description.chosenDescription.author : ''}}
</template>

<style lang="stylus" scoped>
.description-window__bg--hidden
  visibility hidden
  opacity 0
.description-window__bg
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

.description-window__wrapper--hidden
  transform translateY(20px)

.description-window__wrapper
  width 90vw
  height 90vw
  max-width 540px
  max-height 540px
  transition-duration .2s
  transition-property transform
  border-radius 10px
  margin-bottom 32.5px
  position relative
  display flex
  align-items flex-end
  img
    width 100%
    height 100%
    border-radius 10px
  .description-window__box__wrapper
    width calc(100% - 10px)
    margin 5px
    background-color var(--color-bg)
    position absolute
    bottom 0
    border-radius 10px
    .description-window__box
      width calc(100% - 10px)
      margin 5px
      padding 5px
      box-sizing border-box
      border 2px var(--color-darkbrown) dashed
      border-radius 7px
      display flex
      flex-wrap wrap

      a
        width 24px
        height 24px
        display block
        background-color var(--color-darkbrown)
        margin-right 6px
        border-radius 4px
        img
          width 20px
          height 20px
          margin 2px
      h2
        font-size 20px
        margin-bottom 8px
        background linear-gradient(transparent 80%, var(--color-lightgreen) 0%)
      div
        width 100%
        font-size 12px
        margin-top 8px
      p
        width 100%
        line-height 140%
        display block

</style>
