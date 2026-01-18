module.exports = (sequelize, Sequelize) => {
    const MainCourses = sequelize.define("maincourses", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name_course: {
            type: Sequelize.STRING,
            allowNull: false 
        },
        about: {
            type: Sequelize.STRING(500),
            allowNull: false
        },
        imgUrl: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
{
        timestamps: true
})
    return MainCourses
}