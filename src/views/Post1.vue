<template>
  <div class="post">
    <div class="post__image">
      <img src="../assets/salado.jpg" alt="Foto panel principal" />
    </div>
    <div class="post__article">
      <h1>Un tanto Salado</h1>
      <p>
        Sin duda alguna, un lugar que hay que conocer. <br><br>
        Preferiblemente acompañado; pues es inmenso el lugar para disfrutar, llamativo por sus fuentes de agua y su abundante bosque, El Salado es de esos lugares a los que vas y quieres volver. Su terreno, de 2600 km2, es tan amplio que podrías tomar varios senderos, varias rutas; sumado a eso, las vertientes de agua fresca y sus estanques son ideales para refrescarse después de un largo camino bajo el fuerte sol, esta sensación, créeme... es única.
        <br><br>
        La diversidad de aves es otra de las cosas que me gustan de El Salado, ver tanta cantidad y variedad es algo que no encuentras en todas partes y mucho menos en la ciudad, como el barranquero, el trogón y algunas especies endémicas del país como la guacharaca y el caquice candela; su cantar es tan relajante como el silencio del lugar, la tranquilidad es tanta aquí que logras una desconexión total de la rutina, del bullicio y muchas otras cosas más a las que nos enfrentamos en nuestro diario vivir.
        <br><br>
        Si tu interés es buscar un turismo de aventura, de naturaleza (como el mío) o simplemente lugares chéveres a visitar, te recomiendo el Salado, aquí, te aseguro que pasarás un rato increíble y más aún si vas con amigos.
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