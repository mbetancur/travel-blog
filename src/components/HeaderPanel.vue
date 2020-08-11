<template>
  <header class="landing-page">
    <div class="panel-header">
      <div class="panel-header__my-photo">
        <img src="../assets/FotoPrincipal.jpg" alt="Foto panel principal" />
      </div>
      <div class="panel-header__intro-text">
        <h1>EL RINCÓN VERDE</h1>
        <i>
          “And I have always wished that for myself.
          <br />“And now, as you graduate to begin anew, I wish that for you.
          <br />“Stay Hungry. Stay Foolish.”
          <br />
        </i>
        <br />Steve Jobs
      </div>
    </div>
    <div class="panel-info">
      <div>
        <h2>Bienvenido</h2>
        <p>Soy Miguel. Un joven con grandes aspiraciones en la vida, una de ellas es conocer los lugares fántasticos que posee el planeta, pero primero empezar por mi sector, el Valle de Aburra el cual tiene también ciertos atractivos que te podrían interesar, aquí te dejo algunos lugares de turismo natural, únicos y agradables para pasar un buen rato.</p>
      </div>
      <div>
        <h2>Qué hago</h2>
        <p>
          A la montaña subo a pie, jadeando de calor hasta coronar la cumbre. A la casa donde voy se entra por una avenida de rosas cuyos botones estallaron esta tarde al sol. Todavía, en el perfume del aire, mi carne percibe la cópula de la naturaleza.
          <br />
          <br />Fragmento de: Medellín a solas contigo; Gonzalo Arango.
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
.landing-page {
  display: flex;
  flex-flow: column;

  .panel-header {
    &__my-photo {
      img {
        width: 100%;
      }
    }
    &__intro-text {
      padding: 30px 30px 50px;
    }
  }

  .panel-info {
    padding: 30px 30px 50px;
  }

  @include media-query(sm) {
    .panel-header {
      display: grid;
      grid-template-columns: 50% 50%;
      &__my-photo {
        // max-height: 70%;
        img {
          // min-height: 550px;
          max-height: 65vh;
        }
      }
      &__intro-text {
        h1 {
          font-size: 45px;
        }
        i {
          font-size: 15px;
        }
        text-align: center;
        padding: 70px 15%;
        background-color: #fcfcfc;
      }
    }
    .panel-info {
      display: grid;
      grid-template-columns: 50% 50%;
      padding: 50px 70px 70px;
      // display: flex;
      // justify-content: space-around;
      h2 {
        // @extend %titleUnderline;
        @include titleUnderline();
        width: fit-content;
      }
      p {
        margin: 0 2vw 0 1vw;
        padding: 25px;
        // width: 460px;
      }
    }
  }
}
</style>