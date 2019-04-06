<template lang="pug">
  div.main__wrapper: div.main: slot
</template>


<style lang="stylus" scoped>
.main__wrapper
  width 100%
  height calc(var(--static100vh, 100vh) - var(--height-menubar))
  position absolute
  top 0
  left 0
  right 0

  overflow scroll
  display flex
  justify-content center
  background-color rgba(0,0,0,.6)

  div.main
    width 90%
    max-width 540px
    display flex
    flex-direction column
    justify-content flex-start
    align-items center
    padding-top calc((var(--static100vh) - var(--height-menubar)) / 3)
    padding-bottom calc((var(--static100vh) - var(--height-menubar)) / 3)
</style>
