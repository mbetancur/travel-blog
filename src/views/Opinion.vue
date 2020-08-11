<template>
  <div class="opinion">
    <h1 class="opinion__title">Mi opinión</h1>
    <!-- <img src="../assets/opinion.jpeg" alt="opinion image"> -->
  </div>
</template>

<script>
export default {
    name: 'Opinion'
};
</script>

<style lang="scss" scoped>
.opinion {
  @extend %pagePadding;

  &__title {
    @extend %titleUnderline;
  }
}
</style>