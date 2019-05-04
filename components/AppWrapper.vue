<template lang="pug">
  div.app__wrapper
    slot
    div.copy &copy; 2019 Shibata Active Street
</template>

<style lang="stylus" scoped>
.app__wrapper
  width 100%
  height var(--static100vh-without-menubar)

  display flex
  flex-direction column
  justify-content center
  align-items center
  background-color var(--color-bg)
  
</style>
