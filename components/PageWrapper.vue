<template lang="pug">
    div.main
      slot
      div.copy &copy; 2019 Shibata Active Street
</template>

<style lang="stylus" scoped>
  .main
    width 90%
    max-width 540px
    display flex
    flex-wrap wrap
    justify-content center
    margin-bottom var(--height-bottom-menu)
  .copy
    margin 50px 0 10px
</style>
