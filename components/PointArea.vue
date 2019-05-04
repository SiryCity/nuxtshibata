<template lang="pug">
  div.point-area__wapper(:class='{"point-area__wapper--loaded": $store.state.mounted.isLoaded}')
    div.point-area
      div.point-area__tag ポイント
      div.point-area__pts {{$store.state.stamp.pts}}
</template>

<style lang="stylus" scoped>
.point-area__wapper
  width 170px
  height 65px
  background-color var(--color-brown)
  position absolute
  top 20px
  right 0
  border-radius 10px
  transform translateX(170px)
  transition-duration 1s
  transition-property transform
  .point-area
    width 160px
    height 55px
    margin 5px
    box-sizing border-box
    border 3px dashed var(--color-lightgreen)
    border-radius 10px
    display flex
    flex-direction column
    justify-content flex-end
    align-items flex-start
    .point-area__tag
      width 50%
      text-align right
      margin-left -7px
      font-size 12px
    .point-area__pts
      width 50%
      font-size 24px
      text-align right
      margin 2px 0 5px -7px

.point-area__wapper--loaded
  transform translateX(85px)
</style>
