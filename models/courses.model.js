module.exports = (sequelize, Sequelize)=>{
    const Courses = sequelize.define("courses", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        imgUrl: {
            type: Sequelize.STRING,
            allowNull: true
        },
        course_name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        about: {
            type: Sequelize.STRING(500),
            allowNull: true
        }
    },
    {
        timestamps: true
    })
    return Courses
}