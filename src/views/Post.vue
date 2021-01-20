<template>
  <div class="post">
    <PostContent :data="data" :image="this.$route.params.id"/>
  </div>
</template>

<script>
import PostContent from "@/components/PostContent";
export default {
  name: "Post",
  components: {
    PostContent
  },
  computed: {
    data() {
      switch (this.$route.params.id) {
        case "salado":
          return "<h1>Un tanto Salado</h1><p>Sin duda alguna, un lugar que hay que conocer. <br><br>Preferiblemente acompañado; pues es inmenso el lugar para disfrutar, llamativo por sus fuentes de agua y su abundante bosque, El Salado es de esos lugares a los que vas y quieres volver. Su terreno, de 2600 km2, es tan amplio que podrías tomar varios senderos, varias rutas; sumado a eso, las vertientes de agua fresca y sus estanques son ideales para refrescarse después de un largo camino bajo el fuerte sol, esta sensación, créeme... es única.<br><br>La diversidad de aves es otra de las cosas que me gustan de El Salado, ver tanta cantidad y variedad es algo que no encuentras en todas partes y mucho menos en la ciudad, como el barranquero, el trogón y algunas especies endémicas del país como la guacharaca y el caquice candela; su cantar es tan relajante como el silencio del lugar, la tranquilidad es tanta aquí que logras una desconexión total de la rutina, del bullicio y muchas otras cosas más a las que nos enfrentamos en nuestro diario vivir.<br><br>Si tu interés es buscar un turismo de aventura, de naturaleza (como el mío) o simplemente lugares chéveres a visitar, te recomiendo el Salado, aquí, te aseguro que pasarás un rato increíble y más aún si vas con amigos.</p>";
          break;
        case "clara":
          return "<h1>Tan Clara como el agua</h1><p>La Clara, ubicada en el municipio de Caldas, es un destino que no se queda atrás, aún siendo tan frío por el lugar donde se ubica, sin duda está en el ranking de charcos a visitar en el Valle de Aburrá. Aquí encuentras montones de lugares para parcharte con tus amigos o con quien sea que vayas; espacios muy amplios para caminar y acampar, charcos muy fríos a decir verdad, sin embargo bajo un fuerte calor, es agradable.<br /><br />Su accesibilidad no es muy compleja, en vehículo particular se puede llegar pero personalmente prefiero llegar en bus hasta cierta parte de la autopista y continuar mi camino a pie, pues eso es parte de la experiencia de venir a charcos en el Valle de Aburrá; al llegar tendrás un inmenso espacio donde podrás extender tu carpa, montar tu asador y cocinar un rico almuerzo o empezar la aventura de caminar bosque adentro y encontrar maravillas naturales. Además de haber arroyos, también encontrarás estanques que literal parecen una pequeña piscina donde te podrás asentar y disfrutar del momento.<br /><br />Al final, el frío que deja el estar en el agua todo el día o simplemente las ganas de no querer irte y volver lo más pronto posible, son algunas de las cosas que nos dejan estas lindas experiencias de “tirar charco” -como le decimos en Medellín-. Son actividades para cualquier persona, esto es algo de lo que la gran mayoría disfruta y desea hacer varias veces por semana, sea el lugar que sea, si ofrece este lindo paisaje, no dudes en visitarla, el lugar es fantástico.</p>";
          break;
        case "arvi":
          return "<h1>Arví, el parque de la abundancia</h1><p>Se dice que la palabra “arví” proviene de un vocablo indígena que simboliza la abundancia, siendo así cuenta que es uno de los tantos destinos de esta tipología a visitar en Medellín, el parque Arví es un plan ideal de fin de semana, donde puedes   amigos y familia y afianzar ese estrecho lazo de relación que hay entre nosotros y la naturaleza. Es un parque que cuenta con múltiples actividades a realizar, tanto dentro como en los parques aledaños (parques de diversiones de Comfama y Comfenalco), que ofrecen divertidas y diferentes actividades.<br><br> El parque Arví es un plan de un día muy chévere, allí mismo puedes almorzar unas delicias preparadas por los chefs del lugar, las actividades que ofrece son geniales, está el senderismo (bastante largo y bueno) el cual tiene varias rutas, como el sendero camino de la cuesta, el sendero de las orquídeas y el circuito arqueológico son algunos de ellos, también las rutas en bicicleta y el avistamiento de aves son los programas que ofrece el parque Arví; personalmente considero de este una muy buena opción para el ecoturismo que es tan buscado tanto en el Valle de Aburrá como en Medellín.<br><br> Ve con tus amigos, ve con tu familia que hay mucho para hacer en el Arví, tanto que de seguro un día no es suficiente para hacerlo todo.<br><br> Su acceso consta de tomar el metro hasta la estación Acevedo y consiguiente tomar el metro cable hasta la última estación que vendría siendo el parque, en ocasiones el parque se llena completamente de gente, por lo que es imposible ingresar, pero cuando sucede el mismo personal de trabajo lo hace saber para no perder la ida.</p>";
        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>