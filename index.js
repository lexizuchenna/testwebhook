const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let transporter = nodemailer.createTransport({
  host: "smtppro.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: "noreply@tradefundinvestment.com",
    pass: "Tradefund123@",
  },
});

app.post("/", (req, res) => {
  const sendMail = async (from, subject, to, text) => {
    await transporter.sendMail({
      from: from,
      subject,
      to,
      text,
    });
  };

  //   console.log(req.body)
  //   let h1 = document.createElement('h1')
  let textNode;
  for (const key in req.body) {
    textNode = req.body[key];
    //   console.log(h1)
  }
  console.log(textNode);

  sendMail('"Webhook"<noreply@tradefundinvestment.com>', "TEST", "lexizuchenna488@gmail.com", textNode);
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("App Started");
});
