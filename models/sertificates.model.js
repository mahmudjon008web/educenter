module.exports = (sequelize, Sequelize)=>{
    const Sertificates = sequelize.define("certificates", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true, 
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        imgUrl: {
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
    return Sertificates
}