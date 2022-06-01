const { NotFound } = require("http-errors");
const { Contact } = require("../../models");

const removeById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndRemove(contactId);
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
