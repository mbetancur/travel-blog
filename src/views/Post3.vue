<template>
  <div class="post">
    <div class="post__image">
      <img src="../assets/arvi.jpg" alt="Foto panel principal" />
    </div>
    <div class="post__article">
      <h1>El arví</h1>
      <p>
        Uno de los tantos destinos de esta tipología a visitar en Medellín, el parque Arví es un plan ideal de fin de semana, donde puedes compartir con amigos y familia y afianzar ese estrecho lazo de relación que hay entre nosotros. Es un parque que cuenta con múltiples actividades a realizar, tanto en el mismo parque Arvì como en los parques de diversiones de comfama y comfenalco, que ofrecen divertidas y diferentes actividades.
        <br><br> El parque Arvì es un plan de un dìa muy chevere, allì mismo puedes almorzar unas delicias preparadas por los chefs del lugar, las actividades que ofrece son geniales, està el senderismo (bastante largo y bueno) el cual tiene varias rutas, como el sendero camino de la cuesta, el sendero de las orquídeas y el circuito arqueológico son algunos de ellos, también las rutas en bicicleta y el avistamiento de aves son los programas que ofrece el parque Arvì, y personalmente considero de este una muy buena opción para el ecoturismo que es tan buscado tanto en el Valle como en Medellìin.
        <br><br> Ven con tus amigos, ven con tu familia que hay mucho para hacer en el Arvì, tanto que de seguro un dìa no es suficiente para hacerlo todo.
        <br><br> Su acceso consta de tomar el metro hasta la estaciòn Acevedo y consiguiente tomar el metro cable hasta la última estación que vendrìa siendo el parque, en ocasiones el parque se llena completamente de gente, por lo que es imposible ingresar, pero cuando sucede el mismo personal de trabajo lo hace saber para no perder la ida.
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
      // max-height: 90vh; //TODO: adjust better the image
      width: 100%;
    }
  }

  &__article {
    padding: 20px;
    width: 90%;
    background-color: #fff;
    margin-top: -70px;
  }
}
</style>