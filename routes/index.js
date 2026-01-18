const router = require("express").Router()

router.use("/admin", require("./admin.route"))
router.use("/hero", require("./hero.route"))
router.use("/whyeducenter", require("./whyeducenter.route"))

module.exports = router