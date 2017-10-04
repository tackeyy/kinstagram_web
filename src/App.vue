<template>
  <div id="app">
    <app-header></app-header>
    <div class="main">
      <div class="container">
        <router-view></router-view>
      </div>
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

html, body
  height: 100%
  background-color: #fafafa

body
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif
  font-size: 14px
  line-height: 18px

.main
  height: 100%
</style>
