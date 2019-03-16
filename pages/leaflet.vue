<template>
  <div class='test'>
    <no-ssr>
      <l-map class="mini-map" :zoom=13 :center="position">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker :lat-lng="position" :draggable="draggable">
        </l-marker>
      </l-map>
    </no-ssr>
  </div>
</template>

<script>
export default {
  data: () =>
  ({
    position: [55.607741796855734, 13.018133640289308],
    draggable: true,
  }),
  methods: {
    logPosition() {
      console.log(this.position);
    }
  }
};
</script>

<style >
.test {
  width: 100vw;
}
.mini-map {
  width: 100%;
  height: 100% !important;
}
</style>