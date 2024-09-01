function sendMail() {
  // Email.send({
  //   Host: "smtp.elasticemail.com",
  //   Username: "jay.unofficial002@gmail.com",
  //   Password: "Temporary###",
  //   To: "jay.unofficial002@gmail.com",
  //   From: document.getElementById("email").value,
  //   Subject: "New Enquiry",
  //   Body:
  //     "Name: " +
  //     document.getElementById("name").value +
  //     "<br> Email: " +
  //     document.getElementById("email").value +
  //     "<br> Phone: " +
  //     document.getElementById("phone").value +
  //     "<br> Message: " +
  //     document.getElementById("message").value,
  // }).then((message) => alert("Message Sent Succefully"));

  Email.send({
    SecureToken: "f1c1adbd-1d13-475f-b1d2-bf17c8d20117",

    To: "jay.unofficial002@gmail.com",
    From: "jay.unofficial002@gmail.com",
    Subject: "New Enquiry - Olympic Windows",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone: " +
      document.getElementById("phone").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Sent Successfully"));
}
