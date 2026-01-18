module.exports = (sequelize, Sequelize)=>{
    const AllCourses = sequelize.define("allcourses", {
        id: {
            type: Sequelize.INTEGER,
            autoIncement: true,
            primaryKey: true
        },
        imgUrl: {
            type: Sequelize.STRING,
            allowNull: false
        },
        course_name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true
    })
    return AllCourses
}