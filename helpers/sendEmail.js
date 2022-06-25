const sgMAil = require("@sendgrid/mail");

require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

const sendEmail = async (data) => {
  sgMAil.setApiKey(SENDGRID_API_KEY);
  const email = { ...data, from: "tanya.ryptyk@gmail.com" };
  await sgMAil.send(email);
};

module.exports = sendEmail;
