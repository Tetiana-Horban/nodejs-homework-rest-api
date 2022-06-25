const { User } = require("../../models");
const { NotFound, BadRequest } = require("http-errors");
const { v4: uuidv4 } = require("uuid");
const { sendEmail } = require("../../helpers");

const resend = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  const verificationToken = uuidv4();
  if (!email) {
    throw BadRequest("Missing required field email");
  }
  if (!user) {
    throw NotFound("User not found");
  }
  if (user.verify) {
    throw BadRequest("Verification has already been passed");
  }

  const mail = {
    to: email,
    subject: "Confirm email",
    html: `<a target='_blank' href='http://localhost:3000/api/users/verify/${verificationToken}'>Confirm email</a>`,
  };

  await sendEmail(mail);
  res.status(200).json({
    message: "Verification email sent",
  });
};

module.exports = resend;
