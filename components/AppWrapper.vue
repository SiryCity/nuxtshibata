<template lang="pug">
  div.app__wrapper
    slot
    div.copy &copy; 2019 Shibata Active Street
</template>

<style lang="stylus" scoped>
.app__wrapper
  width 90%
  max-width 540px
  min-height var(--static100vh-without-menubar)

  padding-top 50px

  display flex
  flex-direction column
  justify-content flex-start
  align-items center

.copy
  padding-bottom calc(var(--height-bottom-menu) + 10px)
</style>
