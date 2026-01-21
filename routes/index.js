const router = require("express").Router()

router.use("/admin", require("./admin.route"))
router.use("/teachers", require("./teachers.route"))
router.use("/maincourses", require("./maincourses.route"))
router.use("/courses", require("./courses.route"))
router.use("/coursetype", require("./coursetype.route"))
router.use("/connection", require("./connection.route"))
router.use("/sertificates", require("./sertificates.route"))
router.use("/result", require("./result.route"))

module.exports = router