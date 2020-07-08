<template>
  <div id="app">
    <nav-menu />
    <router-view class="content-view" />
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu";
export default {
  name: 'App',
  components: {
    NavMenu
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
#app {
  flex-direction: row;
  display: grid;
  grid-template-columns: 181px auto;
  font-family: Poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.content-view {
  // padding-left: 15px;
}
</style>
