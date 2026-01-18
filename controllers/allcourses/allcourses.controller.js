const { ServerError, ValidError } = require("../../service/validation")
const db = require("../../models")
const MainCourses = db.MainCourses

const getMaincourses = async (req, res)=>{
    try {
        const user = await req.user
        const allcourses = await MainCourses.findAll({where: {id: user.id}})
        res.status(200).json(allcourses) 
    } catch (error) {
        ServerError(res, error)
    }
}

const postMaincourses = async (req, res)=>{
    try {
        const {name_course, about} = req.body
        const imgUrl = `${req.protocol}://${req.host}/uploads/${req.file.filename}`
        const newAllcourses = await Main.create({name_course, about, imgUrl})
        res.status(201).json({
            message: "Ma'lumotlar qo'shildi",
            newAllcourses
        })
    } catch (error) {
        ServerError(res, error)
    }
}

const updateMaincourses = async (req, res)=>{
    try {
        const user = await req.user
        const {name_course, about} = req.body
        const imgUrl = `${req.protocol}://${req.host}/uploads/${req.file.filename}`
        if(!name_course||!about||!imgUrl){
            ValidError(res, 300, "Barcha zonalarni to'ldiring!")
        }
        await MainCourses.update({name_course, about, imgUrl})
        res.status(201).json({
            message: "Ma'lumotlar yangilandi!"
        })
    } catch (error) {
        ServerError(res, error)
    }
}

module.exports = {
    getMaincourses,
    postMaincourses,
    updateMaincourses
}