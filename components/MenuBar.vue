
<template lang="pug">
   nav#menubar__wrapper
     div#menubar
       div test
       div test
       div test
       div test
       div test
</template>

<style lang="stylus" scoped>
#menubar__wrapper
  width 100%
  height var(--height-menubar)
  background-color var(--color-darkblue)
  display flex
  justify-content center
#menubar
  width 100%
  max-width 540px
  height var(--height-menubar)
  display flex
  align-items center
  justify-content space-around
#wrapper__logo
  width auto
  height calc(var(--height-menubar) - 20px)
</style>
