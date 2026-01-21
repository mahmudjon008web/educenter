const { ServerError, ValidError } = require("../../service/validation")
const db = require("../../models")
const Sertificates = db.Sertificates

const getSertificates = async (req, res)=>{
    try {
        const user = await req.user
        const sertificates = await Sertificates.findAll({where: {id: user.id}})
        res.status(200).json(sertificates)
    } catch (error) {
        ServerError(res, error)
    }
}

const postSertificates = async (req, res)=>{
    try {
        const {name, about} = req.body
        const imgUrl = `${res.protocol}://${res.host}/uploads/${req.file.filename}`
        const newsertificate = await Sertificates.create({name, about, imgUrl})
        res.status(201).json({
            message: "Ma'lumotlar qo'shildi",
            newsertificate
        })
    } catch (error) {
        ServerError(res, error)
    }
}

const updateSertificates = async (req, res)=>{
    try {
        const user = await req.user
        const {name, about} = req.body
        const imgUrl = `${res.protocol}://${res.host}/uploads/${req.file.filename}`
        if(!name||!about||!imgUrl){
            ValidError(res, 300, "Barcha zonalarni to'ldiring!")
        }
        await Sertificates.update({name, about, imgUrl},{where: {id: user.id}})
        res.status(201).json({
            message: "Ma'lumotlar yangilandi"
        })
    } catch (error) {
        ServerError(res, error)
    }
}

module.exports = {
    getSertificates,
    postSertificates,
    updateSertificates
}