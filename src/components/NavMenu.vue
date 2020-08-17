<template>
  <nav id="nav" class="nav-menu">
    <header class="nav-menu__header">
      <img src="../assets/logo.png" alt="Foto logo" />
      <h3>El Rincón Verde</h3>
      <div class="nav-menu__header-burger" @click="openMenu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </header>
    <div class="nav-menu__body" :class="{'nav-menu__body-close': isClose}">
      <div class="nav-menu__body__photo">
        <img src="../assets/logo.png" alt="Foto logo" />
      </div>
      <h2 class="nav-menu__body__title">Miguel Betancur</h2>
      <router-link class="nav-menu__body__link" to="/">Home</router-link>
      <router-link class="nav-menu__body__link" to="/blog">Blog</router-link>
      <router-link class="nav-menu__body__link" to="/contact">Contact</router-link>
      <router-link class="nav-menu__body__link" to="/opinion">Mi Opinión</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      isClose: true //TODO: make prop only for device
    };
  },
  methods: {
    openMenu() {
      this.isClose = !this.isClose;
    }
  },
  watch: {
    $route() {
      if (window.matchMedia("(max-width: 426px)").matches) { //TODO: extract and improve query
        this.isClose = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-menu {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #fff;

  &__header {
    margin: 0 12px;
    height: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      @include box(34px);
    }

    .line {
      background-color: black;
      height: 3px;
      width: 18px;
      margin: 4px;
    }
  }

  &__body {
    transition: all 1s;
    @include box(100%);
    background-color: #fff;
    position: fixed;
    display: flex;
    flex-direction: column;
    text-align: center; //TODO: make variable for layout

    &-close {
      // display: none;
      transform: translateY(-1000px);
      transition: all 1s;
    }

    &__photo img {
      @include box(80px);
    }

    &__link {
      font-size: 15px;
      font-weight: bold;
      color: #2c3e50;
      padding: 15px;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  @include media-query(sm) {
    position: static;

    &__header {
      display: none;
    }

    &__body {
      transition: none;
      position: static;
      padding-top: 30px;
      border-right: 15px solid #f5f5f5;

      &-close {
        transition: none;
      }

      &__title {
        margin-bottom: 20px;
      }
    }
  }
}
</style>