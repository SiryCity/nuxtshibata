<template lang="pug">
  div.first-view
    img(:src='shibata' alt='')
    h1 柴田アクティブストリート
    div お買い物でためる
    nuxt-link(to='stamp') スタンプをおしてもらう
    nuxt-link(to='stamp') スタンプのたまるお店をさがす
    div 探検でためる
    nuxt-link(to='stamp')  QRコードのある場所をさがす
</template>

<script>
import shibata from '~/assets/shibata_logo_orange.svg'

export default {
  computed:{
    shibata: () => shibata
  }
}
</script>


<style lang="stylus" scoped>
.first-view
  display flex
  flex-direction column
  justify-content flex-start
  text-align center
  font-weight bold
    
  img
    width 256px

</style>


