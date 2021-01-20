<template>
  <div class="blog">
    <h1 class="blog__title">Blog</h1>
    <div class="blog__cards">
      <!-- //TODO:look how to improve this creator -->
      <blog-card
        route="salado"
        image="salado.jpg"
        date="June 2020"
        title="Un tanto Salado"
      />
      <blog-card
        route="arvi"
        image="arvi.jpg"
        date="June 2020"
        title="Arví, el parque de la abundancia"
      />
      <blog-card
        route="clara"
        image="clara.jpg"
        date="June 2020"
        title="Tan Clara como el agua"
      />
    </div>
  </div>
</template>

<script>
import BlogCard from "@/components/BlogCard";

export default {
  components: {
    BlogCard,
  },
  name: "Blog"
};
</script>

<style lang="scss" scoped>
.blog {
  // display: flex;
  padding: 40px 30px 60px;

  &__title {
    border-bottom: 3px solid #42b983;
  }
  img {
    width: 100%;
  }

  .blog__cards__post {
    border: 1px solid #eee;
    text-align: center;
    margin: 20px 0;

    &--data {
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
  }

  @include media-query(sm) {
    padding: 42px 70px 70px;

    &__cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      .blog__cards__post {
        margin-top: 8vh;
        width: 36vw;
        // display: flex;
        // flex-direction: column;
      }
    }
  }
}
</style>