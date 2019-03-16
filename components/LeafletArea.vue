<template lang="pug">
  div.test
    no-ssr
      l-map.mini-map(:zoom='13' :center='position')
        l-tile-layer(url='http://{s}.tile.osm.org/{z}/{x}/{y}.png')
        l-marker(:lat-lng='position' :draggable='draggable')
</template>

<script>
export default {
  data: () =>
  ({
    position: [55.607741796855734, 13.018133640289308],
    draggable: true,
  }),
}
</script>

<style lang="stylus">
.test
  width 100vw
  height var(--static100vh, 100vh)
  position abusolute
  top 0

.mini-map
  width 100%
  height var(--static100vh, 100vh)

</style>