const { getCoursetype, postCourseType, updateCoursetype, deleteCoursetype } = require("../controllers/coursetype/coursetype.controller")
const { protect } = require("../middleware/protected")
const upload = require("../utils/fileUpload")

const router = require("express").Router()

/**
 * @swagger
 * /educenter/v1/api/coursetype:
 *   get:
 *     summary: CourseType ma’lumotlarini olish (auth orqali)
 *     tags: [CourseType]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: CourseType ro‘yxati
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
 *                   teacher:
 *                     type: string
 *                     example: "John Doe"
 *                   imgUrl:
 *                     type: string
 *                     example: "http://localhost:4500/uploads/coursetype.jpg"
 *       401:
 *         description: Avtorizatsiya talab qilinadi
 *       500:
 *         description: Server xatosi
 */
router.get("/", protect, getCoursetype)
/**
 * @swagger
 * /educenter/v1/api/coursetype/post:
 *   post:
 *     summary: Yangi CourseType qo‘shish
 *     tags: [CourseType]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - teacher
 *               - imgUrl
 *             properties:
 *               teacher:
 *                 type: string
 *                 example: "Jane Smith"
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
 *                 newcoursetype:
 *                   type: object
 *       400:
 *         description: Noto‘g‘ri ma’lumot
 *       401:
 *         description: Avtorizatsiya talab qilinadi
 *       500:
 *         description: Server xatosi
 */
router.post("/post", protect, upload.single("imgUrl"), postCourseType)
/**
 * @swagger
 * /educenter/v1/api/coursetype/update:
 *   patch:
 *     summary: CourseType ma’lumotlarini yangilash (auth orqali)
 *     tags: [CourseType]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - teacher
 *               - imgUrl
 *             properties:
 *               teacher:
 *                 type: string
 *                 example: "Updated Teacher Name"
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
router.patch("/update", protect, upload.single("imgUrl"), updateCoursetype)

router.delete("/delete/:id", protect, deleteCoursetype)

module.exports = router