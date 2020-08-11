<template>
  <div id="app">
    <nav-menu />
    <router-view class="content-view" />
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu";
export default {
  name: "App",
  components: {
    NavMenu
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
#app {
  font-family: Poppins, sans-serif;
  color: #2c3e50;

  @include media-query(sm) {
    flex-direction: row;
    display: grid;
    grid-template-columns: 181px auto;

    .content-view {
      // padding-left: 15px;
    }
  }
}
</style>