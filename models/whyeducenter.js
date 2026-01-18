module.exports = (sequelize, Sequelize)=>{
    const Whyeducenter = sequelize.define("whyeducenter", {
        id: {
            type: Sequelize.INTEGER,
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
            type: Sequelize.STRING(500),
            allowNull: false
        }
    },
    {
        timestamps: true
    })
    return Whyeducenter;
}