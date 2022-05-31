const express = require("express");

const controllers = require("../../controllers/contacts");

const { joiSchema, favoriteJoiSchema } = require("../../models/contact");
const validation = require("../../middlewares/validation");
const ctrlWrapper = require("../../middlewares/ctrlWrapper");

const router = express.Router();

router.get("/", ctrlWrapper(controllers.getAll));

router.get("/:contactId", ctrlWrapper(controllers.getById));

router.post("/", validation(joiSchema), ctrlWrapper(controllers.add));

router.patch(
  "/:contactId/favorite",
  validation(favoriteJoiSchema),
  ctrlWrapper(controllers.updateStatusContact)
);

router.delete("/:contactId", ctrlWrapper(controllers.removeById));

router.put("/:contactId", validation(joiSchema), controllers.updateById);

module.exports = router;
