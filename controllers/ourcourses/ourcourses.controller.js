const { ServerError, ValidError } = require("../../service/validation")
const db = require("../../models/index")
const OurCourses = db.OurCourses

const getOurcourses = async (req, res)=>{
    try {
        const user = await req.user
        const ourcourses = await OurCourses.findAll({where: {id: user.id}})
        res.status(200).json(ourcourses)
    } catch (error) {
        ServerError(res, error)
    }
}

const postOurcourses = async (req, res)=>{
    try {
        const {title} = req.body
        const imgUrl = `${req.protocol}://${req.host}/uploads/${req.file.filename}`
        const newourcourses = await OurCourses.create({title, imgUrl})
        res.status(201).json({
            message: "Ma'lumotlar qo'shildi",
            newourcourses
        })
    } catch (error) {
        ServerError(res, error)
    }
}

const updateOurcourses = async (req, res)=>{
    try {
        const user = await req.user
        const {title} = req.body
        const imgUrl = `${req.protocol}://${req.host}/uploads/${req.file.filename}`
        if(!title||!imgUrl){
            ValidError(res, 300, "Barcha zonalarni to'ldiring!")
        }
        await OurCourses.update({title, imgUrl}, {where: {id: user.id}})
        res.status(201).json({
            message: "Malumotlar yangilandi!"
        })
    } catch (error) {
        ServerError(res, error)
    }
}

module.exports = {
    postOurcourses,
    getOurcourses,
    updateOurcourses
}