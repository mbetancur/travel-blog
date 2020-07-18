<template>
  <div class="blog-card">
    <router-link to="/post3">
      <img src="../assets/arvi.jpg" alt="Foto blog card" class="blog-card__post-img" />
      <div class="blog-card__post-data">
        <p>{{image}}</p>
        <h3>{{title}}</h3>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    link: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-card {
  margin-top: 8vh;
  width: 36vw;
  // height: 24vh;
  display: flex;
  border: 1px solid #eee;
  flex-direction: column;
  text-align: center;
  &__post-data {
    margin: 0 20px;
    text-align: start;
    p {
      color: #888;
      font-size: 11px;
    }
  }
  a {
    color: #333;
    text-decoration: none;
  }
  &__post-img {
    width: 100%;
    height: 100%;
  }
}
</style>