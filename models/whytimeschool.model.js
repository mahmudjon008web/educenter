module.exports = (sequelize, Sequelize)=>{
    const Whytimeschool = sequelize.define("whytimeschool", {
        id: {
            id: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        imgUrl: {
            type: Sequelize.STRING,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        text: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true
    })
    return Whytimeschool;
}