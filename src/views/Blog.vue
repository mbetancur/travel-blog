<template>
  <div class="blog">
    <h1>Blog</h1>
    <div class="blog_cards">
      <div class="blog_card">
        <router-link to="/post1">
          <img src="../assets/logo.png" alt="Foto panel principal" />
          <div class="blog_card__post-data">
            <p>Junio 2020</p>
            <h3>This is a post!</h3>
          </div>
        </router-link>
      </div>
      <div class="blog_card">
        <router-link to="/post1">
          <img src="../assets/logo.png" alt="Foto panel principal" />
          <div class="blog_card__post-data">
            <p>Junio 2020</p>
            <h3>This is a post!</h3>
          </div>
        </router-link>
      </div>
      <div class="blog_card">
        <router-link to="/post1">
          <img src="../assets/logo.png" alt="Foto panel principal" />
          <div class="blog_card__post-data">
            <p>Junio 2020</p>
            <h3>This is a post!</h3>
          </div>
        </router-link>
      </div>
      <div class="blog_card">
        <router-link to="/post1">
          <img src="../assets/logo.png" alt="Foto panel principal" />
          <div class="blog_card__post-data">
            <p>Junio 2020</p>
            <h3>This is a post!</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog"
};
</script>

<style lang="scss" scoped>
.blog {
  padding: 42px 70px 70px;

  h1 {
    border-bottom: 3px solid #42b983;
  }
  .blog_cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .blog_card {
      margin-top: 8vh;
      width: 35vw;
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
    }
  }
}
</style>