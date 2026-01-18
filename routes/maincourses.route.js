const { postMaincourses, getMaincourses, updateMaincourses } = require("../controllers/allcourses/allcourses.controller")
const { protect } = require("../middleware/protected")
const upload = require("../utils/fileUpload")

const router = require("express").Router()


/**
 * @swagger
 * /educenter/v1/api/maincourses:
 *   get:
 *     summary: AllCourses ma'lumotlarini olish
 *     tags: [AllCourses]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: AllCourses ro'yxati
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name_course:
 *                     type: string
 *                   about:
 *                     type: string
 *                   imgUrl:
 *                     type: string
 */
router.get("/", protect, getMaincourses)
/**
 * @swagger
 * /educenter/v1/api/maincourses/post:
 *   post:
 *     summary: Yangi kurs qo'shish
 *     tags: [AllCourses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name_course
 *               - about
 *               - imgUrl
 *             properties:
 *               name_course:
 *                 type: string
 *                 example: JavaScript Backend
 *               about:
 *                 type: string
 *                 example: Ushbu kurs backend asoslarini o'rgatadi
 *               imgUrl:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Ma'lumotlar qo'shildi
 */
router.post("/post", protect, upload.single("imgUrl"), postMaincourses)
/**
 * @swagger
 * /educenter/v1/api/maincourses/update:
 *   patch:
 *     summary: Kurs ma'lumotlarini yangilash
 *     tags: [AllCourses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name_course
 *               - about
 *               - imgUrl
 *             properties:
 *               name_course:
 *                 type: string
 *                 example: React Frontend
 *               about:
 *                 type: string
 *                 example: Frontend uchun React kursi
 *               imgUrl:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Ma'lumotlar yangilandi
 */
router.patch("/update", protect, upload.single("imgUrl"), updateMaincourses)

module.exports = router