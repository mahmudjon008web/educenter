const Sequelize = require("sequelize")

const sequelize = new Sequelize(process.env.DATABASE_URL,{
    dialect: "postgres",
    logging: false
})

const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize

db.User = require("../models/user.model")(sequelize, Sequelize)
db.Hero = require("../models/hero.model")(sequelize, Sequelize)
db.Whytimeschool = require("../models/whytimeschool.model")(sequelize, Sequelize)
db.Teachers = require("../models/teachers.model")(sequelize, Sequelize)
db.Communication = require("../models/communication.model")(sequelize, Sequelize)

module.exports = db