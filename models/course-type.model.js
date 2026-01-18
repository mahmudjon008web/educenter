module.exports = (sequelize, Sequelize) => {
    const CourseType = sequelize.define("course-type", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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
    return CourseType
}
