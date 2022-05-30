const { NotFound } = require("http-errors");
const updateContact = require("../../models/contacts/updateContact");

const updateById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await updateContact(contactId, req.body);
  if (!contact) {
    throw new NotFound(`Contact with ${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      contact,
    },
  });
};
module.exports = updateById;
