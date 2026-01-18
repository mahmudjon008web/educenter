const router = require("express").Router()
const { getWhyeducenter, postWhyeducenter, updateWhyeducenter } = require("../controllers/whytimeschool/whytimeschool.controller")
const { protect } = require("../middleware/protected")
const upload = require("../utils/fileUpload")


/**
 * @swagger
 * /educenter/v1/api/whyeducenter:
 *   get:
 *     summary: Why Educenter ma’lumotlarini olish (token orqali)
 *     tags: [WhyEducenter]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Ma’lumotlar muvaffaqiyatli olindi
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
 *                   title:
 *                     type: string
 *                     example: "Nima uchun Educenter?"
 *                   text:
 *                     type: string
 *                     example: "Bizning afzalliklarimiz..."
 *                   imgUrl:
 *                     type: string
 *                     example: "http://localhost:4500/uploads/image.jpg"
 *       401:
 *         description: Token mavjud emas yoki noto‘g‘ri
 *       500:
 *         description: Server xatosi
 */
router.get("/", protect, getWhyeducenter)
/**
 * @swagger
 * /educenter/v1/api/whyeducenter:
 *   post:
 *     summary: Why Educenter bo‘limiga yangi ma’lumot qo‘shish
 *     tags: [WhyEducenter]
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
 *               - text
 *               - img
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Professional ustozlar"
 *               text:
 *                 type: string
 *                 example: "Bizda tajribali ustozlar dars beradi"
 *               img:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli qo‘shildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Muvaffaqiyatli qo'shildi"
 *       400:
 *         description: Noto‘g‘ri ma’lumot
 *       401:
 *         description: Token yo‘q yoki noto‘g‘ri
 *       500:
 *         description: Server xatosi
 */
router.post("/post", protect, upload.single("imgUrl"), postWhyeducenter)
/**
 * @swagger
 * /educenter/v1/api/whyeducenter:
 *   patch:
 *     summary: Why Educenter ma’lumotlarini yangilash (token orqali)
 *     tags: [WhyEducenter]
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
 *               - text
 *               - img
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Yangilangan sarlavha"
 *               text:
 *                 type: string
 *                 example: "Yangilangan matn"
 *               img:
 *                 type: string
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
router.patch("/update", protect, upload.single("imgUrl") ,updateWhyeducenter)

module.exports = router