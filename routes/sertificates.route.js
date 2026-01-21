const { getSertificates, postSertificates, updateSertificates } = require("../controllers/sertificates/sertificates.controller")
const { protect } = require("../middleware/protected")
const upload = require("../utils/fileUpload")

const router = require("express").Router()

/**
 * @swagger
 * /educenter/v1/api/sertificates:
 *   get:
 *     summary: Sertifikatlar ro‘yxatini olish (auth orqali)
 *     tags: [Sertificates]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Sertifikatlar ro‘yxati
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
 *                   name:
 *                     type: string
 *                     example: "Frontend Certificate"
 *                   about:
 *                     type: string
 *                     example: "React va JavaScript kursi"
 *                   imgUrl:
 *                     type: string
 *                     example: "http://localhost:5000/uploads/cert.png"
 *       401:
 *         description: Avtorizatsiya talab qilinadi
 *       500:
 *         description: Server xatosi
 */
router.get("/", protect, getSertificates)
/**
 * @swagger
 * /educenter/v1/api/sertificates/post:
 *   post:
 *     summary: Yangi sertifikat qo‘shish
 *     tags: [Sertificates]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - about
 *               - imgUrl
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Backend Certificate"
 *               about:
 *                 type: string
 *                 example: "Node.js va PostgreSQL"
 *               imgUrl:
 *                 type: file
 *                 format: binary
 *     responses:
 *       201:
 *         description: Sertifikat muvaffaqiyatli qo‘shildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Ma'lumotlar qo'shildi"
 *                 newsertificate:
 *                   type: object
 *       400:
 *         description: Noto‘g‘ri ma’lumot
 *       500:
 *         description: Server xatosi
 */
router.post("/post", protect, upload.single("imgUrl"), postSertificates)
/**
 * @swagger
 * /educenter/v1/api/sertificates:
 *   patch:
 *     summary: Sertifikat ma’lumotlarini yangilash (auth orqali)
 *     tags: [Sertificates]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - about
 *               - imgUrl
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Certificate"
 *               about:
 *                 type: string
 *                 example: "Updated description"
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
router.patch("/update", protect, upload.single("imgUrl"), updateSertificates)

module.exports = router