const { getOurcourses, postOurcourses, updateOurcourses } = require("../controllers/ourcourses/ourcourses.controller")
const { protect } = require("../middleware/protected")
const upload = require("../utils/fileUpload")

const router = require("express").Router()


/**
 * @swagger
 * /educenter/v1/api/ourcourses:
 *   get:
 *     summary: OurCourses ma'lumotlarini olish
 *     tags: [OurCourses]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: OurCourses ro'yxati
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   imgUrl:
 *                     type: string
 */
router.get("/", protect, getOurcourses)
/**
 * @swagger
 * /educenter/v1/api/ourcourses/post:
 *   post:
 *     summary: Yangi OurCourses qo'shish
 *     tags: [OurCourses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - imgUrl
 *             properties:
 *               title:
 *                 type: string
 *                 example: Frontend kurs
 *               imgUrl:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Ma'lumotlar qo'shildi
 */
router.post("/post", protect, upload.single("imgUrl"), postOurcourses)
/**
 * @swagger
 * /educenter/v1/api/ourcourses/update:
 *   put:
 *     summary: OurCourses ma'lumotlarini yangilash
 *     tags: [OurCourses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - imgUrl
 *             properties:
 *               title:
 *                 type: string
 *                 example: Backend kurs
 *               imgUrl:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Ma'lumotlar yangilandi
 */
router.patch("/update", protect, upload.single("imgUrl"), updateOurcourses)

module.exports = router