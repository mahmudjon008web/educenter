module.exports = (sequelize, Sequelize) => {
    return sequelize.define("course-type", {
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
        teacher: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}
