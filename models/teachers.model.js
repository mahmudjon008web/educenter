module.exports = (sequelize, Sequelize)=>{
    const Teachers = sequelize.define("teachers", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        fullName: {
            type: Sequelize.STRING,
            allowNull: true
        },
        level: {
            type: Sequelize.STRING,
            allowNull: true
        },
        imgUrl: {
            type: Sequelize.STRING,
            allowNull: true
        },
        about: {
            type: Sequelize.STRING(1000),
            allowNull: true
        },
        experience: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        students: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        goodStudents: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    },
    {
        timestamps: true
    })
    return Teachers;
}