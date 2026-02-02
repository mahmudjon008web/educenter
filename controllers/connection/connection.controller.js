const { ServerError, ValidError } = require("../../service/validation")
const db = require("../../models")
const Connection = db.Connection

const getConnection = async (req, res)=>{
    try {
        const user = await req.user
        const connection = await Connection.findAll()
        res.status(200).json(connection) 
    } catch (error) {
        ServerError(res, error)
    }
}

const postConnection = async (req, res)=>{
    try {
        const {name, surname, phone, adress} = req.body
        const newConnection = await Connection.create({name, surname, phone, adress})
        res.status(201).json({
            message: "Ma'lumotlar qo'shildi",
            newConnection
        })
    } catch (error) {
        ServerError(res, error)
    }
}

const updateConnection = async (req, res)=>{
    try {
        const user = await req.user
        const {name, surname, phone, adress} = req.body
        if(!name||!surname||!phone||!adress){
            ValidError(res, 300, "Barcha zonalarni to'ldiring!")
        }
        await Connection.update({name, surname, phone, adress}, {where: {id: user.id}})
        res.status(201).json({
            message: "Ma'lumotlar yangilandi"
        })
    } catch (error) {
        ServerError(req, error)
    }
}

module.exports = {
    getConnection,
    postConnection,
    updateConnection
}