const router = require("express").Router()
const { getHero, postHero, updateHero } = require("../controllers/hero/hero.controller")
const {isAdmin} = require("../middleware/isAdmin")
const { protect } = require("../middleware/protected")
const upload = require("../utils/fileUpload")

/**
 * @swagger
 * /educenter/v1/api/hero:
 *   get:
 *     summary: Hero ma’lumotini ID bo‘yicha olish
 *     tags: [Hero]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Hero ma’lumoti
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
 *                     example: "Hero sarlavha"
 *                   text:
 *                     type: string
 *                     example: "Hero matni"
 *                   imageUrl:
 *                     type: string
 *                     example: "http://localhost:4500/uploads/image.jpg"
 *       404:
 *         description: Ma’lumot topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/" , protect ,getHero)
/**
 * @swagger
 * /educenter/v1/api/hero/post:
 *   post:
 *     summary: Hero bo‘limiga yangi ma’lumot qo‘shish
 *     tags: [Hero]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - text
 *               - imageUrl
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Asosiy sarlavha"
 *               text:
 *                 type: string
 *                 example: "Hero bo‘limi uchun matn"
 *               imageUrl:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Ma’lumot muvaffaqiyatli qo‘shildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Ma'lumot qo'shildi"
 *                 newHero:
 *                   type: object
 *       400:
 *         description: Noto‘g‘ri ma’lumot
 *       500:
 *         description: Server xatosi
 */
router.post("/post", upload.single("imageUrl"), protect, postHero)

/**
 * @swagger
 * /educenter/v1/api/hero/update/{id}:
 *   patch:
 *     summary: Hero ma’lumotini yangilash
 *     tags: [Hero]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - text
 *               - imageUrl
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Yangilangan sarlavha"
 *               text:
 *                 type: string
 *                 example: "Yangilangan matn"
 *               imageUrl:
 *                 type: file
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
 *                   example: "Muvaffaqiyatli yangilanish"
 *       400:
 *         description: Barcha zonalarni to‘ldiring
 *       404:
 *         description: Hero topilmadi
 *       500:
 *         description: Server xatosi
 */
router.patch("/update", protect, upload.single("imageUrl") ,updateHero)

module.exports = router