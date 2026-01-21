module.exports = (sequelize, Sequelize)=>{
    const Result = sequelize.define("result", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        graduate: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        goodStudents: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        fullProjects: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        partners: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: true
    })
    return Result
}