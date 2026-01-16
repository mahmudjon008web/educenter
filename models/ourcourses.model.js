module.exports = (sequelize, Sequelize) => {
    return sequelize.define("ourcourses", {
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
        }
    })
}