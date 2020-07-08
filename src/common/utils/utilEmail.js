const sendEmail = (contact) => {
    return Email.send({
        Host: "smtp.elasticemail.com",
        Username: "slash-252@hotmail.com",
        Password: "67435E3FA315112018493A3198A6DDB28980",
        // TEST
        // To: "mateobetancurgrisales@gmail.com",
        //REAL
        To: "miguelbetancurgrisales@gmail.com",
        From: "slash-252@hotmail.com",
        Subject: "New message from your blog El Rincón Verde",
        Body:
            "Hello Miguel, " +
            contact.name +
            " with email: " +
            contact.email +
            " wrote this in El Rincón Verde for you: " +
            "Subject: " +
            contact.subject +
            ". Message: " +
            contact.message
    });
}
const fakeSendEmail = (contact) => {
    console.log(
        "sended email",
        "Hello Miguel, " +
        contact.name +
        " with email: " +
        contact.email +
        " wrote this in El Rincón Verde for you: " +
        "Subject: " +
        contact.subject +
        ". Message: " +
        contact.message
    );
    return Promise.resolve()
}

export { sendEmail, fakeSendEmail }