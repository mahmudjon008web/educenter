const { ServerError, ValidError } = require("../../service/validation")
const db = require("../../models")
const Result = db.Result

const getResult = async (req, res)=>{
    try {
        const user = await req.user
        const result = await Result.findAll({where: {id: user.id}})
        res.status(200).json(result)
    } catch (error) {
        ServerError(res, error)
    }
}

const postResult = async (req, res)=>{
    try {
        const {graduate, goodStudents, fullProjects, partners} = req.body
        const newResult = await Result.create({graduate, goodStudents, fullProjects, partners})
        res.status(201).json({
            message: "Ma'lumotlar qo'shildi",
            newResult
        })
    } catch (error) {
        ServerError(res, error)
    }
}

const updateResult = async (req, res)=>{
    try {
        const user = req.user
        const {graduate, goodStudents, fullProjects, partners} = req.body
        if(!graduate||!goodStudents||!fullProjects||!partners){
            ValidError(res, 300, "Barcha zonalarni to'ldiring!")
        }
        await Result.update({graduate, goodStudents, fullProjects, partners}, {where: {id: user.id}})
        res.status(201).json({
            message: "Ma'lumotlar yangilandi"
        })
    } catch (error) {
        ServerError(res, error)
    }
}

module.exports = {
    getResult,
    postResult,
    updateResult
}