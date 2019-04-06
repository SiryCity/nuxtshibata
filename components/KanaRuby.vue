<template lang='pug'>
span
  ruby(v-if='kana[1]')
    | {{kana[0]}}
    rt
      | {{kana[1]}}
  span(v-else)
    | {{kana[0]}}
</template>

<script>
  export default {
    props: {
      kana: Array
    },
  }
</script>
