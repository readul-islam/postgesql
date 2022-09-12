const { Contacts,User } = require("../../database");

exports.getAllContacts = (requestBody) => {
  return Contacts.findAll({
    // where: {
    //   countryId: requestBody.countryId,
    // },
  });
};

exports.createContact = async (requestBody) => {
  console.log(requestBody);
//   const [contact, created] = await Contacts.findOrCreate({
//     where: { email: requestBody.email },
//     defaults: { ...requestBody },
//     include: [
//       { model: User, as: "user" }
     
//     ],
//   });
//   if (!created) {
//     return { massage: "contactId already exist", contactId: contact.id };
//   }
//   return {contactId:contact.id, contact:contact};
return Contacts.create({...requestBody})
};
