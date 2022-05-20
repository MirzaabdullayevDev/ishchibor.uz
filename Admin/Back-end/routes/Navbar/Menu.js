const { Router } = require("express");
const router = Router();
const fileUpload = require("../../middleware/fileUpload");
const { NavbarMenuAdd, NavbarMenuEdit } = require("../../controllers/Navbar");

router.route("/menu/add").post(fileUpload.single("image"), NavbarMenuAdd);
router.route("/menu/edit/:id").put(fileUpload.single("image"), NavbarMenuEdit);

module.exports = router;
