<template>
  <div class="landing-page">
    <div class="panel-header">
      <div class="panel-header__my-photo">
        <img src="../assets/FotoPrincipal.jpg" alt="Foto panel principal" />
      </div>
      <div class="panel-header__intro-text">
        <h1>Miguel en la ciudad</h1>Praesent sed aliquam arcu, non accumsan neque. In odio ante, vulputate ac magna vel, pharetra lobortis quam. Duis enim tortor, egestas et felis id, lobortis malesuada magna. Nunc sit amet sagittis nisi, eu semper nisl. Cras ut dictum nisl. Donec tincidunt eget orci.
      </div>
    </div>
    <div class="panel-info">
      <div>
        <h2>Bienvenido</h2>
        <p>soy Miguel. Un joven con grandes aspiraciones en la vida, una de ellas es conocer los lugares fántasticos que posee el planeta, pero primero empezar por mi sector, el Valle de Aburra el cual tiene también ciertos atractivos que te podrían interesar, aquí te dejo algunos lugares de turismo natural, únicos y agradables para pasar un buen rato.</p>
      </div>
      <div>
        <h2>Qué hago</h2>
        <p>Haribus, ommolup tatiscimus ut faceperatur alicidior sum exeri as aliqui apienis net veliquasped milibusci cuptatem estium nobit fuga. Itatur, quo volupti undebit asperspe dolo moluptatio. Icatempores aruptiosam faccata at a ipsum quidi ant omnimi, vit volutemquo explab is sam, eat provide ratatiunt. Ad quam re dolorerferro blaborrum repti as que ernamuscid etur, vernam fugite non nulpario el ipidunt, ommolum harum que voluptio et idelend.</p>
      </div>
    </div>
  </div>
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
        font-size: 42px;
      }
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
        width: fit-content;
        border-bottom: 3px solid #42b983;
    }
    p {
      margin-left: 2vw;
      padding: 25px;
      // width: 460px;
    }
  }
}
</style>