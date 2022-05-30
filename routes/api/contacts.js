const express = require("express");

const controllers = require("../../controllers/contacts");
const contactShema = require("../../schemas/contacts");
const validation = require("../../middlewares/validation");
const ctrlWrapper = require("../../middlewares/ctrlWrapper");

const router = express.Router();

const validateMiddleware = validation(contactShema);

router.get("/", ctrlWrapper(controllers.getAll));

router.get("/:contactId", ctrlWrapper(controllers.getById));

router.post("/", validateMiddleware, ctrlWrapper(controllers.add));

router.delete("/:contactId", ctrlWrapper(controllers.removeById));

router.put("/:contactId", validateMiddleware, controllers.updateById);

module.exports = router;
