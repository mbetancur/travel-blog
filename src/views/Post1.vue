<template>
  <div class="post">
    <div class="post__image">
      <img src="../assets/salado.jpg" alt="Foto panel principal" />
    </div>
    <div class="post__article">
      <h1>Post 1</h1>
      <p>
        Nulla nulla nisl, sodales ac nulla ac, consequat vulputate purus. Curabitur tincidunt ipsum vel nibh rutrum accumsan. Nunc ullamcorper posuere leo, vitae aliquet risus pharetra in. Integer turpis eros, iaculis et mi non, pulvinar egestas leo. Etiam sagittis ex turpis, vitae cursus tortor interdum eu. Quisque ultrices nunc eget erat vestibulum euismod. Ut mauris nisi, facilisis at arcu nec, facilisis porttitor lorem.
        Vivamus vitae neque molestie, porta libero sed, tincidunt leo. In nec posuere odio, id rhoncus lorem. Proin id erat ut dolor condimentum viverra. Praesent viverra sed dolor ac luctus. Praesent placerat id lorem quis lacinia.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post1"
};
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  flex-flow: column;
  align-items: center;

  &__image {
    img {
      max-height: 90vh; //TODO: adjust better the image
      // width: 100%;
    }
  }

  &__article {
    padding: 18px;
    width: 90%;
    background-color: #fff;
    margin-top: -70px;
  }
}
</style>