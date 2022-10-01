<template>
  <div id="app">
    <detailPage />
  </div>
</template>

<script>
import detailPage from './components/detail-page/detail-page.vue'

export default {
  name: 'App',
  components: {
    detailPage
  }
}
</script>

<style lang="scss">
@import './main.scss'
</style>

