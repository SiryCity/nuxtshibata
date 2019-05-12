<template lang="pug">
  div.leaflet__wrapper
    no-ssr
      l-map.mini-map(:zoom='16' :center='[35.0742236, 136.910764]')
        l-tile-layer(url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png')
        l-circle(
          fill-color="var(--color-lightgreen)"
          v-for='(building, i) in $store.getters["buildings/buildings"]'
          :key='`building-${i}`'
          :lat-lng='[building.lat, building.long]'
          @click='$store.commit("description/enterDescription", building)'
        )
        l-circle(
          fill-color="var(--color-brown)"
          v-for='(ghost, i) in $store.getters["ghosts/ghosts"]'
          :key='`ghost-${i}`'
          :lat-lng='[ghost.lat, ghost.long]'
          @click='$store.commit("description/enterDescription", ghost)'
        )
        l-circle(
          fill-color="var(--color-brown)"
          v-for='(danger, i) in $store.getters["dangers/dangers"]'
          :key='`danger-${i}`'
          :lat-lng='[danger.lat, danger.long]'
          @click='$store.commit("description/enterDescription", danger)'
        )
        
</template>


<style lang="stylus">
.leaflet__wrapper
  width 100vw
  height calc(100% - var(--height-bottom-menu))
  position fixed
  top 0
  left 0

  .mini-map
    width 100%
    height calc(var(--static100vh, 100vh) - var(--height-bottom-menu))

    .leaflet-interactive
      stroke var(--color-darkbrown)
      stroke-width 2px
      fill-opacity 1
      background-color unset

    .shop
      fill var(--color-brown)
    .qr
      fill var(--color-lightgreen)

.leaflet-control-zoom-in
.leaflet-control-zoom-out
  background-color var(--color-brown) !important
</style>