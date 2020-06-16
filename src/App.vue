<template>
  <div id="app">
    <div id="nav" class="nav-menu">
      <router-link to="/">Home</router-link>|
      <router-link to="/contact">Contact</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view class="content-view" />
  </div>
</template>

<style lang="scss">
.nav-menu {
  height: 100%;
  background-color: yellow;
  display: flex;
  flex-direction: column;
}

.content-view {
  border-left: 15px solid red;
  padding-left: 15px;
}

#app {
  flex-direction: row;
  display: grid;
  grid-template-columns: 160px auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
