<template>
  <form class="contact-form" @submit="onSubmit">
    <h2 class="contact-form__title">Qué puedo hacer por ti?</h2>
    <!-- TODO: make alert a component -->
    <div v-if="alertSuccess" class="contact-form--alert-success ">
      <p>Contact form successfully submitted. Thank you, I will get back to you soon!</p>
      <button class="material-icons" @click="closeAlert">close</button>
    </div>
    <div class="contact-form__elements">
      <div class="contact-form__elements--inputs">
        <input
          required
          name="name"
          v-model="contact.name"
          placeholder="Full Name"
          type="text"
          autocomplete="off"
        />
        <input
          required
          name="email"
          v-model="contact.email"
          placeholder="Email Address"
          type="email"
          autocomplete="off"
        />
        <input
          required
          name="email"
          v-model="contact.subject"
          placeholder="Subject"
          type="text"
          autocomplete="off"
        />
      </div>
      <textarea required name="message" v-model="contact.message" rows="4" placeholder="Message"></textarea>
    </div>
    <button class="contact-form__button">Send Message</button>
  </form>
</template>

<script>
import { sendEmail, fakeSendEmail } from "@/common/utils/utilEmail.js";

export default {
  name: "ContactForm",
  data() {
    return {
      contact: {
        name: "",
        subject: "",
        email: "",
        message: ""
      },
      alertSuccess: false
    };
  },
  methods: {
    clearForm() {
      for (let field in this.contact) {
        this.contact[field] = "";
      }
    },
    showAlert() {
      this.alertSuccess = true;
    },
    closeAlert() {
      this.alertSuccess = false;
    },
    onSubmit(evt) {
      evt.preventDefault();
      // sendEmail(this.contact).then(this.showAlert(), this.clearForm());
      fakeSendEmail(this.contact).then(this.showAlert(), this.clearForm());
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
  &__title {
    width: fit-content;
    @extend %titleUnderline;
  }

  &--alert-success  {
    display: flex;
    justify-content: space-between;
    background-color: #7fceab;
    border: 1px solid #42b983;

    p {
      margin: 4px 12px;
    }

    button {
      background-color: transparent;
      border: transparent;
    }
  }

  &__elements {
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    &--inputs {
      width: 25vw;
      display: flex;
      flex-direction: column;

      input {
        margin: 0 12px 12px 0;
        height: 42px;
      }
    }
    textarea {
      resize: none;
      width: 25vw;
      font-family: unset;
    }
  }

  &__button {
    // @extend %titleUnderline;
    border: 3px solid #42b983;
    background-color: #fff;
    padding: 10px 32px;

    &:hover {
      background-color: $brand-color;
    }
  }
}
</style>