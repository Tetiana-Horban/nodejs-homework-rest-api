const express = require("express");

const { validation, ctrlWrapper, auth } = require("../../middlewares");

const { users: controller } = require("../../controllers");
const { joiSchema } = require("../../models/user");

const router = express.Router();

router.post("/signup", validation(joiSchema), ctrlWrapper(controller.signup));
router.post("/login", validation(joiSchema), ctrlWrapper(controller.login));
router.get("/current", auth, ctrlWrapper(controller.getCurrent));
router.get("/logout", auth, ctrlWrapper(controller.logout));

module.exports = router;
