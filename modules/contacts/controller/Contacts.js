const { contactsRepository } = require("../repository");
const { getAllContacts, createContact } = require("../repository/contactsRepos");

class Contacts {
  async getAllContacts(req, res) {
    try {
      const contacts = await getAllContacts(req.body);
      return res.send(contacts);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }
  async addContact(req,res){
    try {
      const addContact = await createContact(req.body);
      return res.send(addContact);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
      
    }
  }
}

module.exports = new Contacts();
