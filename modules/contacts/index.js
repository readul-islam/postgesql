const express = require("express");
const repository = require("./repository");
const contactController = require("./controller/Contacts");

const router = express.Router();

const contactRoutes = express.Router();
contactRoutes.get("/", contactController.getAllContacts);
contactRoutes.post("/add", contactController.addContact);

router.use("/contact", contactRoutes);

module.exports = {
  router,
  repository,
};
