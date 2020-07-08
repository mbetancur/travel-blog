<template>
  <div class="survey-modal" v-show="value">
    <span class="material-icons">help_outline</span>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdtirdRV2ixrhhPxLcr8bPZGtcvlLautqGaCyc91zU-S9sjcw/viewform"
      target="_blank"
      rel="noopener noreferrer"
    >¿Te gusta nuestro contenido?</a>
    <button class="material-icons" @click="close">close</button>
  </div>
</template>

<script>
export default {
  name: "SurveyModal",
  data() {
    return {
      modalOpen: false
    };
  },
  props: {
    value: {
      required: true
    }
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.survey-modal {
  span {
    font-size: 55px;
  }
  border-radius: 12px;
  background-color: ghostwhite;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 10px 10px rgba(10, 138, 72, 0.2);
  height: 140px;
  width: 400px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 28px 14px 0;

  button {
    margin-top: 12px;
    align-self: flex-start;
    background-color: transparent;
    border: transparent;
  }
}
</style>