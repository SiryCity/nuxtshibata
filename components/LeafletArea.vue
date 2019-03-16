<template lang="pug">
  div.leaf
    no-ssr
      l-map.mini-map(:zoom='13' :center='position')
        l-tile-layer(url='http://{s}.tile.osm.org/{z}/{x}/{y}.png')
        l-marker(:lat-lng='position')
</template>

<script>
export default {
  data: () =>
  ({
    position: [55.607741796855734, 13.018133640289308],
  }),
}
</script>

<style lang="stylus">
.leaf
  width 100vw
  height calc(var(--static100vh, 100vh) - var(--height-menubar))
  position relative
  z-index -1

.mini-map
  width 100%
  height calc(var(--static100vh, 100vh) - var(--height-menubar))

</style>