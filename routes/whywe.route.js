const { getWhywe, postWhywe, updateWhywe } = require("../controllers/whywe/whywe.controller")
const { protect } = require("../middleware/protected")
const upload = require("../utils/fileUpload")

const router = require("express").Router()

/**
 * @swagger
 * /educenter/v1/api/whywe:
 *   get:
 *     summary: WhyWe ma’lumotlarini olish (auth orqali)
 *     tags: [WhyWe]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: WhyWe ro‘yxati
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
 *                     example: "Nega biz?"
 *                   about:
 *                     type: string
 *                     example: "Bizning afzalliklarimiz haqida"
 *                   imgUrl:
 *                     type: string
 *                     example: "http://localhost:4500/uploads/whywe.jpg"
 *       401:
 *         description: Avtorizatsiya talab qilinadi
 *       500:
 *         description: Server xatosi
 */
router.get("/", protect, getWhywe)
/**
 * @swagger
 * /educenter/v1/api/whywe/post:
 *   post:
 *     summary: WhyWe bo‘limiga yangi ma’lumot qo‘shish
 *     tags: [WhyWe]
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
 *               - about
 *               - imgUrl
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Bizning ustunligimiz"
 *               about:
 *                 type: string
 *                 example: "Tajribali ustozlar va sifatli ta’lim"
 *               imgUrl:
 *                 type: string
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
 *                 newWhywe:
 *                   type: object
 *       400:
 *         description: Noto‘g‘ri ma’lumot
 *       401:
 *         description: Avtorizatsiya talab qilinadi
 *       500:
 *         description: Server xatosi
 */
router.post("/post", protect, upload.single("imgUrl"), postWhywe)
/**
 * @swagger
 * /educenter/v1/api/whywe/update:
 *   patch:
 *     summary: WhyWe ma’lumotlarini yangilash (auth orqali)
 *     tags: [WhyWe]
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
 *               - about
 *               - imgUrl
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Yangilangan sarlavha"
 *               about:
 *                 type: string
 *                 example: "Yangilangan tavsif"
 *               imgUrl:
 *                 type: string
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
router.patch("/update", protect, upload.single("imgUrl"), updateWhywe)

module.exports = router