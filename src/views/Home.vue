<template>
  <div class="home">
    <header-panel />
    <!-- <button class="survey__button" @click="openModal">Open Modal</button> -->
    <!-- <survey-modal class="survey-slide" v-model="modalOpen" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderPanel from "@/components/HeaderPanel.vue";
import SurveyModal from "@/components/SurveyModal";

export default {
  name: "Home",
  components: {
    HeaderPanel,
    SurveyModal
  },
  data() {
    return {
      modalOpen: false
    };
  },
  created() {
    this.modalOpen = true;
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  .survey-slide {
    animation-duration: 1.1s;
    animation-name: slidein;
  }

  @keyframes slidein {
    0% {
      left: 0;
    }
    33% {
      left: 71%;
    }
    66% {
      left: 45%;
    }
    100% {
      left: 69%;
    }
  }
}
</style>