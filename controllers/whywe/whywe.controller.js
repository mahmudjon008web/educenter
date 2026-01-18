const { ServerError, ValidError } = require("../../service/validation")
const db = require("../../models")
const whyWe = db.whyWe

const getWhywe = async (req, res)=>{
    try {
        const user = await req.user
        const whywe = await whyWe.findAll({where: {id: user.id}})
        res.status(200).json(whywe)
    } catch (error) {
        ServerError(res, error)
    }
}

const postWhywe = async (req, res)=>{
    try {
        const {title, about} = req.body
        const imgUrl = `${req.protocol}://${req.host}/uploads/${req.file.filename}`
        const newWhywe = await whyWe.create({title, about, imgUrl})
        res.status(201).json({
            message: "Ma'lumotlar qo'shildi",
            newWhywe
        })
    } catch (error) {
        ServerError(res, error)
    }
}

const updateWhywe = async (req, res)=>{
    try {
        const user = await req.user
        const {title, about} = req.body
        const imgUrl = `${req.protocol}://${req.host}/uploads/${req.file.filename}`
        if(!title||!about||!imgUrl){
            ValidError(res, 300, "Barcha zonalarni to'ldiring!")
        }
        await whyWe.update({title, about, imgUrl}, {where: {id: user.id}})
        res.status(201).json({
            message: "Ma'lumotlar yangilandi"
        })
    } catch (error) {
        ServerError(res, error)
    }
}

module.exports = {
    getWhywe,
    postWhywe,
    updateWhywe
}