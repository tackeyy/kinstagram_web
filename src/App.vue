<template>
  <div id="app">
    <app-header></app-header>
    <div class="main container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'app',
  components: { AppHeader }
}
</script>

<style lang="stylus">
@import '~normalize.css'

.main
  background-color: #fafafa
</style>
