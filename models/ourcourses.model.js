module.exports = (sequelize, Sequelize) => {
    const OurCourses = sequelize.define("ourcourses", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
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
    return OurCourses;
}