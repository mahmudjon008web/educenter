const { getTeachers, postTeachers, updateTeachers, deleteTeachers } = require("../controllers/teachers/teachers.controller")
const { protect } = require("../middleware/protected")
const upload = require("../utils/fileUpload")

const router = require("express").Router()


/**
 * @swagger
 * /educenter/v1/api/teachers:
 *   get:
 *     summary: O‘qituvchilar ro‘yxatini olish (token orqali)
 *     tags: [Teachers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: O‘qituvchilar ro‘yxati
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
 *                   fullName:
 *                     type: string
 *                     example: "Mahmudjon Aliyev"
 *                   level:
 *                     type: string
 *                     example: "Senior"
 *                   about:
 *                     type: string
 *                     example: "5 yillik tajribaga ega ustoz"
 *                   experience:
 *                     type: integer
 *                     example: 5
 *                   students:
 *                     type: integer
 *                     example: 120
 *                   imgUrl:
 *                     type: string
 *                     example: "http://localhost:4500/uploads/teacher.jpg"
 *       401:
 *         description: Token mavjud emas yoki noto‘g‘ri
 *       500:
 *         description: Server xatosi
 */
router.get("/", protect, getTeachers)
/**
 * @swagger
 * /educenter/v1/api/teachers/post:
 *   post:
 *     summary: Yangi o‘qituvchi qo‘shish
 *     tags: [Teachers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - level
 *               - about
 *               - experience
 *               - students
 *               - imgUrl
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: "Mahmudjon Aliyev"
 *               level:
 *                 type: string
 *                 example: "Senior"
 *               about:
 *                 type: string
 *                 example: "Backend va Node.js bo‘yicha mutaxassis"
 *               experience:
 *                 type: integer
 *                 example: 5
 *               students:
 *                 type: integer
 *                 example: 200
 *               imgUrl:
 *                 type: file
 *                 format: binary
 *     responses:
 *       201:
 *         description: O‘qituvchi muvaffaqiyatli qo‘shildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Muvaffaqiyatli qo'shildi"
 *                 newTeacher:
 *                   type: object
 *       400:
 *         description: Noto‘g‘ri ma’lumot
 *       401:
 *         description: Token mavjud emas
 *       500:
 *         description: Server xatosi
 */
router.post("/post", protect, upload.single("imgUrl"), postTeachers)
/**
 * @swagger
 * /educenter/v1/api/teachers/update:
 *   patch:
 *     summary: O‘qituvchi ma’lumotlarini yangilash (token orqali)
 *     tags: [Teachers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - level
 *               - about
 *               - experience
 *               - students
 *               - imgUrl
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: "Yangilangan ism"
 *               level:
 *                 type: string
 *                 example: "Middle"
 *               about:
 *                 type: string
 *                 example: "Yangilangan tavsif"
 *               experience:
 *                 type: integer
 *                 example: 6
 *               students:
 *                 type: integer
 *                 example: 250
 *               imgUrl:
 *                 type: file
 *                 format: binary
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli yangilandi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Muvaffaqiyatli yangilandi"
 *       400:
 *         description: Barcha zonalarni to‘ldiring
 *       401:
 *         description: Token mavjud emas
 *       500:
 *         description: Server xatosi
 */
router.patch("/update", protect, upload.single("imgUrl"), updateTeachers)


router.delete("/delete/:id", protect, deleteTeachers)

module.exports = router