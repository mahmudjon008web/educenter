const router = require("express").Router()

router.use("/admin", require("./admin.route"))
router.use("/hero", require("./hero.route"))
router.use("/whyeducenter", require("./whyeducenter.route"))
router.use("/teachers", require("./teachers.route"))
router.use("/ourcourses", require("./ourcourses.route"))
router.use("/maincourses", require("./maincourses.route"))
router.use("/allcourses", require("./allcourses.route"))
router.use("/whywe", require("./whywe.route"))
router.use("/coursetype", require("./coursetype.route"))
router.use("/connection", require("./connection.route"))

module.exports = router