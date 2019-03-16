<template lang="pug">
  div.leaflet__wrapper
    no-ssr
      l-map.mini-map(:zoom='15.5' :center='position')
        l-tile-layer(url='http://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png')
        l-marker(:lat-lng='position')
</template>

<script>
export default {
  data: () =>
    ({
      position: [35.0742236, 136.910764],
    }),
}
</script>

<style lang="stylus">
.leaflet__wrapper
  width 100vw
  height calc(var(--static100vh, 100vh) - var(--height-menubar))
  position relative
  z-index -1
.mini-map
  width 100%
  height calc(var(--static100vh, 100vh) - var(--height-menubar))

</style>