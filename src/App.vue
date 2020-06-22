<template>
  <div id="app">
    <div id="nav" class="nav-menu">
      <div class="my-photo">
        <img src="./assets/logo.png" alt="Foto panel principal" />
      </div>
      <h2>Miguel Betancur</h2>
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view class="content-view" />
  </div>
</template>

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

#nav {
  padding: 30px;
  a {
    font-size: 15px;
    font-weight: bold;
    color: #2c3e50;
    padding: 15px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.nav-menu {
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-right: 15px solid #f5f5f5;

  .my-photo img {
    height: 80px;
    max-height: 80px;
    width: 80px;
  }

  h2 {
    margin-bottom: 20px;
  }
}

.content-view {
  // padding-left: 15px;
}
</style>
