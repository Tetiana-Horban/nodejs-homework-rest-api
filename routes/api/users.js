const express = require("express");

const { validation, ctrlWrapper, auth, upload } = require("../../middlewares");

const { users: controller } = require("../../controllers");
const { joiSchema } = require("../../models/user");

const router = express.Router();

router.post("/signup", validation(joiSchema), ctrlWrapper(controller.signup));
router.post("/login", validation(joiSchema), ctrlWrapper(controller.login));
router.get("/current", auth, ctrlWrapper(controller.getCurrent));
router.get("/logout", auth, ctrlWrapper(controller.logout));
router.patch(
  "/avatars",
  auth,
  upload.single("avatars"),
  ctrlWrapper(controller.updateAvatar)
);

module.exports = router;
