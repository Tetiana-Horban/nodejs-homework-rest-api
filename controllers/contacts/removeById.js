const { NotFound } = require("http-errors");
const removeContact = require("../../models/contacts/removeContacts");

const removeById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await removeContact(contactId);
  if (!contact) {
    throw new NotFound(`Contact with ${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: `Contact with ${contactId} deleted`,
    data: { contact },
  });
};
module.exports = removeById;
