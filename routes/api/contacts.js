const express = require("express");

const { contacts: controller } = require("../../controllers");

const { joiSchema, favoriteJoiSchema } = require("../../models/contact");
const { validation, ctrlWrapper, auth } = require("../../middlewares");

const router = express.Router();

router.get("/", auth, ctrlWrapper(controller.getAll));

router.get("/:contactId", ctrlWrapper(controller.getById));

router.post("/", auth, validation(joiSchema), ctrlWrapper(controller.add));

router.patch(
  "/:contactId/favorite",
  validation(favoriteJoiSchema),
  ctrlWrapper(controller.updateStatusContact)
);

router.delete("/:contactId", ctrlWrapper(controller.removeById));

router.put("/:contactId", validation(joiSchema), controller.updateById);

module.exports = router;
