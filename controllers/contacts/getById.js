const { NotFound } = require("http-errors");
const getContactById = require("../../models/contacts/getContactById");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);
  if (!contact) {
    throw new NotFound(`Contact with ${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: { contact },
  });
};
module.exports = getById;
