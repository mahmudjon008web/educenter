module.exports = (sequelize, Sequelize) => {
    return sequelize.define("home", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name_course: {
            type: Sequelize.STRING,
            allowNull: false
        },
        imgUrl: {
            type: Sequelize.STRING,
            allowNull: false
        },
        about: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}
