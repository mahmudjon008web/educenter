const Sequelize = require("sequelize")

const sequelize = new Sequelize(process.env.DATABASE_URL,{
    dialect: "postgres",
    logging: false
})

const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize

db.User = require("../models/user.model")(sequelize, Sequelize)
db.Teachers = require("../models/teachers.model")(sequelize, Sequelize)
db.Courses = require("./courses.model")(sequelize, Sequelize)
db.Connection = require("../models/connection.model")(sequelize, Sequelize)
db.Sertificates = require("../models/sertificates.model")(sequelize, Sequelize)
db.Result = require("../models/result.model")(sequelize, Sequelize)

module.exports = db