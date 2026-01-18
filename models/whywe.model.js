module.exports = (sequelize, Sequelize) => {
    const whyWe = sequelize.define("why-we", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
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
    },{
        timestamps: true
    })
    return whyWe;
}