const addContact = require("../../models/contacts/addContact");

const add = async (req, res, next) => {
  const contact = await addContact(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: { contact },
  });
};
module.exports = add;
