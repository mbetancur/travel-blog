<template>
  <div id="contact-form" class="contact-form">
    <h1 class="contact-form_title">Contact</h1>
    <div class="separator"></div>
    <div class="contact-cards">
      <div class="contact-card">(+57) 300 000 0000</div>
      <div class="contact-card">Colombia - Antioquia</div>
      <div class="contact-card">travelblog@correo.com</div>
    </div>
    <form class="form" @submit="onSubmit">
      <div class="form-elements">
        <div class="inputs">
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
        <textarea name="message" v-model="contact.message" rows="4" placeholder="Message"></textarea>
      </div>
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
      console.log("email");
      // this.sendEmail();
    },
    sendEmail() {
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "slash-252@hotmail.com",
        Password: "67435E3FA315112018493A3198A6DDB28980",
        // To: "mikebaia@yopmail.com",
        To: "mateobetancurgrisales@gmail.com",
        From: "slash-252@hotmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
      }).then(message => alert(message));
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;

  .contact-cards {
    margin: 100px 0;
    width: 70%;
    display: flex;
    justify-content: space-around;
    .contact-card {
      // padding: 30px 45px;
      padding: 3vh 2vw;
      border: 1px solid #eee;
      text-align: center;
    }
  }

  .form {
    .form-elements {
      display: flex;
      flex-direction: row;
      .inputs {
        display: flex;
        flex-direction: column;
        input {
          margin: 0 12px 12px;
          width: 204px;
          height: 42px;
        }
      }
    }
  }
}
</style>