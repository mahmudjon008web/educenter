const { getConnection, postConnection, updateConnection } = require("../controllers/connection/connection.controller")
const { protect } = require("../middleware/protected")

const router = require("express").Router()

/**
 * @swagger
 * /educenter/v1/api/connection:
 *   get:
 *     summary: Connection ma’lumotlarini olish (auth orqali)
 *     tags: [Connection]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Connection ro‘yxati
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
 *                     example: "Ali"
 *                   surname:
 *                     type: string
 *                     example: "Karimov"
 *                   phone:
 *                     type: string
 *                     example: "+998901234567"
 *                   adress:
 *                     type: string
 *                     example: "Toshkent sh., Chilonzor"
 *       401:
 *         description: Avtorizatsiya talab qilinadi
 *       500:
 *         description: Server xatosi
 */
router.get("/", protect, getConnection)
/**
 * @swagger
 * /educenter/v1/api/connection/post:
 *   post:
 *     summary: Yangi connection qo‘shish
 *     tags: [Connection]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - surname
 *               - phone
 *               - adress
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Ali"
 *               surname:
 *                 type: string
 *                 example: "Karimov"
 *               phone:
 *                 type: string
 *                 example: "+998901234567"
 *               adress:
 *                 type: string
 *                 example: "Toshkent sh., Yunusobod"
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
 *                 newConnection:
 *                   type: object
 *       400:
 *         description: Noto‘g‘ri ma’lumot
 *       500:
 *         description: Server xatosi
 */
router.post("/post", protect, postConnection)
/**
 * @swagger
 * /educenter/v1/api/connection/update:
 *   patch:
 *     summary: Connection ma’lumotlarini yangilash (auth orqali)
 *     tags: [Connection]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - surname
 *               - phone
 *               - adress
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Name"
 *               surname:
 *                 type: string
 *                 example: "Updated Surname"
 *               phone:
 *                 type: string
 *                 example: "+998909876543"
 *               adress:
 *                 type: string
 *                 example: "Updated address"
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
router.patch("/update", protect, updateConnection)

module.exports = router