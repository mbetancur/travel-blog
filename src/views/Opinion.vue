<template>
  <div class="opinion">
    <h1>Mi opinión</h1>
    <img src="../assets/opinion.jpeg" alt="opinion image">
  </div>
</template>

<script>
export default {
    name: 'Opinion'
};
</script>

<style lang="scss" scoped>
.opinion {
  padding: 42px 70px 70px;

  h1 {
    // border-bottom: 3px solid #42b983;
    @extend %titleUnderline;
  }
}
</style>