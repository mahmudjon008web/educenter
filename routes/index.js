const router = require("express").Router()

router.use("/admin", require("./admin.route"))
router.use("/hero", require("./hero.route"))
router.use("/whyeducenter", require("./whyeducenter.route"))
router.use("/teachers", require("./teachers.route"))
router.use("/ourcourses", require("./ourcourses.route"))
router.use("/maincourses", require("./maincourses.route"))

module.exports = router