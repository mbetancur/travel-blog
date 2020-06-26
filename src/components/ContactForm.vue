<template>
  <div class="contact">
    <h1 class="contact-form__title">Contact</h1>
    <div id="contact-form" class="contact-form">
      <div class="contact-cards">
        <div class="contact-card">
          <span class="material-icons">phone</span>
          (+57) 300 000 0000
        </div>
        <div class="contact-card">
          <span class="material-icons">location_on</span>
          Colombia - Antioquia
        </div>
        <div class="contact-card">
          <span class="material-icons">mail_outline</span>
          travelblog@correo.com
        </div>
      </div>
      <form class="form" @submit="onSubmit">
        <h2>Qué puedo hacer por ti?</h2>
        <div v-if="alertSuccess" class="form__alert-success">
          <p>Contact form successfully submitted. Thank you, I will get back to you soon!</p>
          <button class="material-icons" @click="closeAlert">close</button>
        </div>
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
          <textarea
            required
            name="message"
            v-model="contact.message"
            rows="4"
            placeholder="Message"
          ></textarea>
        </div>
        <button class="form__button">Send Message</button>
      </form>
    </div>
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
      this.sendEmail();
      // this.fakeSendEmail();
    },
    sendEmail() {
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "slash-252@hotmail.com",
        Password: "67435E3FA315112018493A3198A6DDB28980",
        //TEST
        // To: "mateobetancurgrisales@gmail.com",
        //REAL
        To: "miguelbetancurgrisales@gmail.com",
        From: "slash-252@hotmail.com",
        Subject: "New message from your blog El Rincón Verde",
        Body:
          "Hello Miguel, " +
          this.contact.name +
          " with email: " +
          this.contact.email +
          " wrote this in El Rincón Verde for you: " +
          "Subject: " +
          this.contact.subject +
          ". Message: " +
          this.contact.message
      }).then(this.showAlert(), this.clearForm());
    },
    fakeSendEmail() {
      console.log(
        "sended email",
        "Hello Miguel, " +
          this.contact.name +
          " with email: " +
          this.contact.email +
          " wrote this in El Rincón Verde for you: " +
          "Subject: " +
          this.contact.subject +
          ". Message: " +
          this.contact.message
      );
      this.showAlert();
      this.clearForm();
    }
  }
};
</script>

<style lang="scss" scoped>
.contact {
  padding: 42px 70px 70px;

  h1 {
    border-bottom: 3px solid #42b983;
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;

  .contact-cards {
    margin: 80px 0;
    width: 70vw;
    display: flex;
    justify-content: space-around;

    .contact-card {
      min-width: 18vw;
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
  }

  .form {
    h2 {
      width: fit-content;
      border-bottom: 3px solid #42b983;
    }
    &__alert-success {
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

    .form-elements {
      margin-top: 30px;
      display: flex;
      flex-direction: row;

      .inputs {
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
      border: 3px solid #42b983;
      background-color: #fff;
      padding: 10px 32px;

      &:hover {
        background-color: #42b983;
      }

      &:active {
        top: 1px;
      }
    }
  }
}
</style>