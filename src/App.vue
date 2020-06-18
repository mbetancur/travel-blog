<template>
  <div id="app">
    <div id="nav" class="nav-menu">
      <div class="my-photo">
        <img src="./assets/logo.png" alt="Foto panel principal" />
      </div>
      <h2>Miguel Betancur</h2>
      <router-link to="/">Home</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view class="content-view" />
  </div>
</template>

<style lang="scss">
.nav-menu {
  height: 100vh;
  background-color: rgb(227, 227, 121);
  display: flex;
  flex-direction: column;
  text-align: center;
  border-right: 15px solid red;

  .my-photo img {
    height: 80px;
    max-height: 80px;
    width: 80px;
  }

  h2 {
    margin-bottom: 12px;
  }
}

.content-view {
  padding-left: 15px;
}

#app {
  flex-direction: row;
  display: grid;
  grid-template-columns: 170px auto;
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
    padding: 12px;
    // border-bottom: 1px solid #f5f5f5;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
