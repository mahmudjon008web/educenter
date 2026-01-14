const Sequelize = require("sequelize")

const sequelize = new Sequelize(process.env.DATABASE_URL,{
    dialect: "postgres",
    logging: false
})

const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize

db.User = require("../models/user.model")(sequelize, Sequelize)

module.exports = db