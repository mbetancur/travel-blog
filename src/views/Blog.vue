<template>
  <div class="blog">
    <h1>Blog</h1>
    <div class="blog__cards">
      <div class="blog__cards__post">
        <router-link to="/post1">
          <img src="../assets/salado.jpg" alt="Foto panel principal" class="blog__cards__post--img" />
          <div class="blog__cards__post--data">
            <p>Junio 2020</p>
            <h3>Un tanto Salado</h3>
          </div>
        </router-link>
      </div>
      <div class="blog__cards__post">
        <router-link to="/post2">
          <img src="../assets/la-clara.jpg" alt="Foto panel principal" class="blog__cards__post--img" />
          <div class="blog__cards__post--data">
            <p>Junio 2020</p>
            <h3>Tan Clara como el agua</h3>
          </div>
        </router-link>
      </div>
      <!-- <blog-card link="post3" image="../assets/salado.jpg" date="June 2020" title="El Arví" /> //TODO:look how to improve this creator-->
      <div class="blog__cards__post">
        <router-link to="/post3">
          <img src="../assets/arvi.jpg" alt="Foto panel principal" class="blog__cards__post--img"/>
          <div class="blog__cards__post--data">
            <p>Junio 2020</p>
            <h3>Arví, el parque de la abundancia</h3>
          </div>
        </router-link>
      </div>
    </div>
    <survey-modal v-model="modalOpen" />
  </div>
</template>

<script>
import BlogCard from "@/components/BlogCard";
import SurveyModal from "@/components/SurveyModal";

export default {
  components: {
    BlogCard,
    SurveyModal
  },
  name: "Blog",
  created() {
    this.modalOpen = true;
  },
  data() {
    return {
      modalOpen: false
    };
  }
};
</script>

<style lang="scss" scoped>
.blog {
  padding: 42px 70px 70px;

  h1 {
    // border-bottom: 3px solid #42b983;
    @extend %titleUnderline;
  }
  &__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .blog__cards__post {
      margin-top: 8vh;
      width: 36vw;
      // height: 24vh;
      display: flex;
      border: 1px solid #eee;
      flex-direction: column;
      text-align: center;

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

      &--img {
        // width: 100%;
        // height: 100%;
        @include box(100%);
      }
    }
  }
}
</style>