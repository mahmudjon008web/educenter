module.exports = (sequelize, Sequelize)=>{
    return Communication = sequelize.define("communication", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        text: {
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
}