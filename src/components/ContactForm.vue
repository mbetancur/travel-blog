<template>
  <div id="contact-form" class="contact-form">
    <h1 class="contact-form_title">Contact</h1>
    <div class="separator"></div>
    <form class="form" @submit="onSubmit">
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
      <textarea name="message" v-model="contact.message" rows="4" placeholder="Message"></textarea>
      <button class="button">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      contact: {
        name: "",
        subject: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    clearForm() {
      for (let field in this.contact) {
        this.contact[field] = "";
      }
    },
    onSubmit(evt) {
      evt.preventDefault();
    //   this.sendEmail();
    },
    sendEmail() {
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "slash-252@hotmail.com",
        Password: "67435E3FA315112018493A3198A6DDB28980",
        To: "mikebaia@yopmail.com",
        From: "slash-252@hotmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
      }).then(message => alert(message));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>