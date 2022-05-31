const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const i = contacts.findIndex((item) => item.id === contactId);
  if (i === -1) {
    return null;
  }
  const newContacts = contacts.filter((_, index) => index !== i);
  await updateContacts(newContacts);
  return contacts[i];
};
module.exports = removeContact;
