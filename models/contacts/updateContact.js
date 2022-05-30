const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const i = contacts.findIndex((item) => item.id === contactId);
  if (i === -1) {
    return null;
  }
  contacts[i] = { ...body, id: contactId };
  await updateContacts(contacts);
  return contacts[i];
};

module.exports = updateContact;
