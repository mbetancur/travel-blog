<template>
  <div class="contact">
    <h1 class="contact__title">Contact</h1>
    <div class="contact__info">
      <div class="contact__info--cards">
        <!-- <contact-card icon="phone" text=""/> -->
        <contact-card icon="location_on" text="Colombia - Antioquia" />
        <!-- TODO: auto mail -->
        <contact-card icon="mail_outline" text="miguelbetancurgrisales@gmail.com" />
      </div>
      <ContactForm />
    </div>
    <survey-modal v-model="modalOpen" />
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactCard from "@/components/ContactCard";
import SurveyModal from "@/components/SurveyModal";

export default {
  name: "Contact",
  components: {
    ContactForm,
    ContactCard,
    SurveyModal
  },
  data() {
    return {
      modalOpen: false
    };
  },
  created() {
    this.modalOpen = true;
  }
};
</script>

<style lang="scss" scoped>
.contact {
  @extend %pagePadding;

  &__title {
    @extend %titleUnderline;
    // @include titleUnderline();
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__info--cards {
    margin: 70px 0;
    width: 70vw;
    display: flex;
    justify-content: space-around;
  }
}
</style>