const router = require("express").Router()
const { login, logout } = require("../controllers/admin/admin.controller")
const { protect } = require("../middleware/protected")
/**
 * @swagger
 * /educenter/v1/api/admin/login:
 *   post:
 *     summary: ADMIN akkauntiga kirish
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phone
 *               - password
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "933211234"
 *               password:
 *                 type: string
 *                 example: "apple123"
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Akauntga kirildi!"
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: Parol yoki foydalanuvchi xato
 *       404:
 *         description: Foydalanuvchi topilmadi
 *       500:
 *         description: Server xatosi
 */
router.post("/login", login)
/**
 * @swagger
 * /educenter/v1/api/admin/logout:
 *   post:
 *     summary: ADMIN akkauntidan chiqish
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli chiqildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Muvaffaqiyatli chiqildi!"
 *       401:
 *         description: Token mavjud emas yoki noto‘g‘ri
 *       500:
 *         description: Server xatosi
 */
router.post("/logout", protect, logout)

module.exports = router