module.exports = (sequelize, Sequelize) => {
    const whyWe = sequelize.define("why-we", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name_we: {
            type: Sequelize.STRING,
            allowNull: false
        },
        about: {
            type: Sequelize.STRING,
            allowNull: false 
        }
    },{
        timestamps: true
    })
    return whyWe;
}