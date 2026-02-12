const router = require("express").Router()
const { getAllcourses, postAllcourses, updateAllcourses, deleteCourses } = require("../controllers/courses/courses.controller")
const {protect} = require("../middleware/protected")
const upload = require("../utils/fileUpload")
const uploadSingleImage = require("../utils/uploadSingleImage")

/**
 * @swagger
 * /educenter/v1/api/allcourses:
 *   get:
 *     summary: AllCourses ro‘yxatini olish (auth orqali)
 *     tags: [AllCourses]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Kurslar ro‘yxati
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   course_name:
 *                     type: string
 *                     example: "Frontend Development"
 *                   imgUrl:
 *                     type: string
 *                     example: "http://localhost:4500/uploads/course.jpg"
 *       401:
 *         description: Avtorizatsiya talab qilinadi
 *       500:
 *         description: Server xatosi
 */
router.get("/", protect, getAllcourses)
/**
 * @swagger
 * /educenter/v1/api/allcourses/post:
 *   post:
 *     summary: Yangi kurs qo‘shish
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
 *               - course_name
 *               - imgUrl
 *             properties:
 *               course_name:
 *                 type: string
 *                 example: "Backend Development"
 *               imgUrl:
 *                 type: file
 *                 format: binary
 *     responses:
 *       201:
 *         description: Ma’lumotlar muvaffaqiyatli qo‘shildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Ma'lumotlar qo'shildi"
 *                 newallcourses:
 *                   type: object
 *       400:
 *         description: Noto‘g‘ri ma’lumot
 *       401:
 *         description: Avtorizatsiya talab qilinadi
 *       500:
 *         description: Server xatosi
 */
router.post("/post", protect, upload.single("imgUrl"), postAllcourses)
/**
 * @swagger
 * /educenter/v1/api/allcourses/update:
 *   patch:
 *     summary: Kurs ma’lumotlarini yangilash (auth orqali)
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
 *               - course_name
 *               - imgUrl
 *             properties:
 *               course_name:
 *                 type: string
 *                 example: "Updated Course Name"
 *               imgUrl:
 *                 type: file
 *                 format: binary
 *     responses:
 *       201:
 *         description: Ma’lumotlar yangilandi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Ma'lumotlar yangilandi"
 *       400:
 *         description: Barcha zonalarni to‘ldiring
 *       401:
 *         description: Avtorizatsiya talab qilinadi
 *       500:
 *         description: Server xatosi
 */
router.patch("/update", protect, upload.single("imgUrl"), updateAllcourses)

router.delete("/delete/:id", protect, deleteCourses)

module.exports = router