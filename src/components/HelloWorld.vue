<template>
  <div class="panel-header">
    <div class="panel-header_my-photo">
      <img src="../assets/logo.png" alt="Foto panel principal" />
    </div>
    <div class="panel-header_intro">
      <h1>Miguel en la ciudad</h1>
      Praesent sed aliquam arcu, non accumsan neque. In odio ante, vulputate ac magna vel, pharetra lobortis quam. Duis enim tortor, egestas et felis id, lobortis malesuada magna. Nunc sit amet sagittis nisi, eu semper nisl. Cras ut dictum nisl. Donec tincidunt eget orci.
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
.panel-header {
  display: flex;

  &_my-photo img {
    min-height: 550px;
  }
  &_intro {
    padding: 70px 15%;
    background-color: red; //#fcfcfc;
  }
}
</style>
