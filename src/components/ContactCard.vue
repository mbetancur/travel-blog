<template>
  <div class="contact__card">
    <span class="material-icons">{{icon}}</span>
    {{text}}
  </div>
</template>

<script>
export default {
  name: "ContactCard",
  props: {
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.contact__card {
  min-width: 22vw;
  display: flex;
  flex-direction: column;
  padding: 14px 0;
  border: 1px solid #eee;
  text-align: center;

  span {
    margin-bottom: 24px;
    font-size: 55px;
  }
}
</style>