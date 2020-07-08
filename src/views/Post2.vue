<template>
  <div class="post">
    <div class="post__image">
      <img src="../assets/la-clara.jpg" alt="Foto panel principal" />
    </div>
    <div class="post__article">
      <h1>Tan Clara como el agua</h1>
      <p>
        La Clara, ubicada en el municipio de Caldas, es un destino que no se queda atrás, aún siendo tan frío por el lugar donde se ubica, sin duda está en el ranking de charcos a visitar en el Valle de Aburrá. Aquí encuentras montones de lugares para parcharte con tus amigos o con quien sea que vayas; espacios muy amplios para caminar y acampar, charcos muy fríos a decir verdad, sin embargo bajo un fuerte calor, es agradable.
        <br />
        <br />Su accesibilidad no es muy compleja, en vehículo particular se puede llegar pero personalmente prefiero llegar en bus hasta cierta parte de la autopista y continuar mi camino a pie, pues eso es parte de la experiencia de venir a charcos en el Valle de Aburrá; al llegar tendrás un inmenso espacio donde podrás extender tu carpa, montar tu asador y cocinar un rico almuerzo o empezar la aventura de caminar bosque adentro y encontrar maravillas naturales. Además de haber arroyos, también encontrarás estanques que literal parecen una pequeña piscina donde te podrás asentar y disfrutar del momento.
        <br />
        <br />Al final, el frío que deja el estar en el agua todo el día o simplemente las ganas de no querer irte y volver lo más pronto posible, son algunas de las cosas que nos dejan estas lindas experiencias de “tirar charco” -como le decimos en Medellín-. Son actividades para cualquier persona, esto es algo de lo que la gran mayoría disfruta y desea hacer varias veces por semana, sea el lugar que sea, si ofrece este lindo paisaje, no dudes en visitarla, el lugar es fantástico.
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