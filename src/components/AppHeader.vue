<template>
  <header class="header">
    <div class="d-flex justify-content-around mb-4 mt-4">
      <div class="p-1">
        <router-link to="/" class="logoLink">💪 | kinstagram</router-link>
      </div>
      <div class="p-1">
        <i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="stylus">
.header
  border-bottom: 1px solid rgba(0,0,0,.0975)
  .header-section
    margin: 30px 0
    .header-section__logo
      padding-left: 150px
</style>
