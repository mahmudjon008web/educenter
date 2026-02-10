const { getResult, postResult, updateResult, deleteResult } = require("../controllers/result/result.controller")
const { protect } = require("../middleware/protected")

const router = require("express").Router()

/**
 * @swagger
 * /educenter/v1/api/result:
 *   get:
 *     summary: Result ma'lumotlarini olish
 *     tags: [Result]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Result ro'yxati
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Result'
 *       500:
 *         description: Server xatosi
 */
router.get("/", protect, getResult)
/**
 * @swagger
 * /educenter/v1/api/result:
 *   post:
 *     summary: Yangi result qo‘shish
 *     tags: [Result]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - graduate
 *               - goodStudents
 *               - fullProjects
 *               - partners
 *             properties:
 *               graduate:
 *                 type: integer
 *                 example: 1200
 *               goodStudents:
 *                 type: integer
 *                 example: 980
 *               fullProjects:
 *                 type: integer
 *                 example: 350
 *               partners:
 *                 type: integer
 *                 example: 25
 *     responses:
 *       201:
 *         description: Result muvaffaqiyatli qo‘shildi
 *       500:
 *         description: Server xatosi
 */
router.post("/post", protect, postResult)
/**
 * @swagger
 * /educenter/v1/api/result:
 *   put:
 *     summary: Result ma'lumotlarini yangilash
 *     tags: [Result]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - graduate
 *               - goodStudents
 *               - fullProjects
 *               - partners
 *             properties:
 *               graduate:
 *                 type: integer
 *               goodStudents:
 *                 type: integer
 *               fullProjects:
 *                 type: integer
 *               partners:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Result yangilandi
 *       400:
 *         description: Validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */
router.patch("/update", protect, updateResult)

router.delete("/delete/:id", protect, deleteResult)

module.exports = router