<template>
  <div class="post-content">
    <img :src="require('@/assets/' + image + '.jpg')" alt="Foto blog card" class="post-content__image" />
    <div class="post-content__article" v-html="data"></div>
  </div>
</template>

<script>
export default {
  name: "PostContent",
  props: {
    data: String,
    image: String
  }
};
</script>

<style lang="scss" scoped>
.post-content {
  display: flex;
  flex-flow: column;
  align-items: center;

  &__image {
    // img {
      // max-height: 90vh; //TODO: adjust better the image
      width: 100%;
    // }
  }

  &__article {
    padding: 20px;
    width: 90%;
    background-color: #fff;
    margin-top: -70px;
  }
}
</style>