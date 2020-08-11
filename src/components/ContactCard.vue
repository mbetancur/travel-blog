<template>
  <div class="contact-card">
    <span class="contact-card__icon material-icons">{{icon}}</span>
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
.contact-card {
  margin: 25px 0;
  min-width: 22vw;
  display: flex;
  flex-direction: column;
  padding: 14px 0;
  border: 1px solid #eee;
  text-align: center;
  //TODO: make mail text smaller
  &__icon {
    margin-bottom: 24px;
    font-size: 55px;
  }
}
</style>