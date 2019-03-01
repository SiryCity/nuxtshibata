
<template lang="pug">
   nav#menubar
     div#menubar__wrapper
       div test
</template>

<style lang="stylus" scoped>
#menubar
  width 100%
  height 60px
  background-color gray
  position fixed
  bottom 0
  display flex
  justify-content center
#menubar__wrapper
  width 100%
  max-width 1920px
  height 60px
  display flex
  align-items center
  justify-content space-between
#wrapper__logo
  width auto
  height 40px
</style>
