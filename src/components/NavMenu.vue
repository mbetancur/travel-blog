<template>
  <nav id="nav" class="nav-menu">
    <div class="nav-menu__photo">
      <img src="../assets/logo.png" alt="Foto logo" />
    </div>
    <h2>Miguel Betancur</h2>
    <router-link to="/">Home</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/opinion">Mi Opinión</router-link>

  </nav>
</template>

<script>
export default {
  name: "NavMenu"
};
</script>

<style lang="scss" scoped>
.nav-menu {
  padding-top: 30px;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-right: 15px solid #f5f5f5;

  &__photo img {
    height: 80px;
    max-height: 80px;
    width: 80px;
  }

  h2 {
    margin-bottom: 20px;
  }

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
</style>