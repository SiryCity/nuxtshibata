
<template lang="pug">
   nav#menubar
     div#menubar__wrapper
       div test
</template>

<style lang="stylus" scoped>
#menubar
  width 100%
  height var(--height-menubar)
  background-color gray
  display flex
  justify-content center
#menubar__wrapper
  width 100%
  max-width 1920px
  height var(--height-menubar)
  display flex
  align-items center
  justify-content space-between
#wrapper__logo
  width auto
  height calc(var(--height-menubar) - 20px)
</style>
