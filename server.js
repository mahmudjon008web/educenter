const express = require("express")
require("dotenv").config()
const { ServerError } = require("./service/validation")
const path = require("path")
const cors = require("cors")
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
const db = require("./models")
const { registerAdmin } = require("./controllers/admin/admin.controller")
const app = express()
require("colors")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))
app.use(cors({
    origin: "*"
}))
// ================== SWAGGER CONFIG ==================
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Education Platform API',
      version: '1.0.0',
      description: 'O‘quv markazlar uchun backend API hujjati',
    },
    servers: [
      {
        url: 'http://localhost:4500',
        description: 'Local server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  // ❗ controller va route fayllarni ko‘rsatamiz
  apis: ['./routes/*.js', './controllers/*.js'],
}

const swaggerSpec = swaggerJsdoc(swaggerOptions)

// Swagger UI route
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use("/educenter/v1/api", require("./routes"))
app.get("/", (req, res)=>{
    try {
        res.status(200).json({
            message: "Bu (educenter) uchun API"
        })
    } catch (error) {
        ServerError(res, error)
    }
})
app.use((req, res)=>{
    res.status(404).json({
        message: "Page Not Found"
    })
})


const PORT = process.env.PORT || 4500
const start = async ()=>{
    await db.sequelize.sync({force: false})
    await registerAdmin()
    app.listen(PORT, ()=>{
        console.log(`Server is running on: http://localhost:${PORT}`.bgBlue);
    })
}
start()