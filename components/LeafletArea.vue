<template lang="pug">
  div.leaflet__wrapper
    no-ssr
      l-map.mini-map(:zoom='16' :center='[35.0742236, 136.910764]')
        l-tile-layer(url='http://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png')
        l-circle(
          v-for='(building, i) in $store.getters["buildings/buildings"]'
          :key='`building-${i}`'
          :lat-lng='[building.lat, building.long]'
        )
        l-circle(
          v-for='(ghost, i) in $store.getters["ghosts/ghosts"]'
          :key='`ghost-${i}`'
          :lat-lng='[ghost.lat, ghost.long]'
        )
        l-circle(
          v-for='(danger, i) in $store.getters["dangers/dangers"]'
          :key='`danger-${i}`'
          :lat-lng='[danger.lat, danger.long]'
        )
        
</template>


<style lang="stylus">
.leaflet__wrapper
  width 100vw
  height calc(var(--static100vh, 100vh) - var(--height-menubar))
  position relative
  z-index -1
.mini-map
  width 100%
  height calc(var(--static100vh, 100vh) - var(--height-menubar))

.leaflet-interactive
  stroke #333
  stroke-width 2px
  fill orange
  fill-opacity 1
  background-color unset
</style>