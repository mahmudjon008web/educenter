module.exports = (sequelize, Sequelize)=>{
    const Hero = sequelize.define("hero", {
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
            type: Sequelize.STRING(500),
            allowNull: false
        },
        imageUrl: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true
    })
    return Hero;
}