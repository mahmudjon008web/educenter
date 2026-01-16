module.exports = (sequelize, Sequelize)=>{
    const Teachers = sequelize.define("teachers", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        fullName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        level: {
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
        },
        experience: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        students: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: true
    })
    return Teachers;
}