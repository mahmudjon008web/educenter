const {ServerError, ValidError} = require("../../service/validation")
const db = require("../../models")
const Courses = db.Courses

const getAllcourses = async (req, res)=>{
    try {
        const user = await req.user
        const allcourses = await Courses.findAll() 
        res.status(200).json(allcourses)
    } catch (error) {
        ServerError(res, error)
    }
}

const postAllcourses = async (req, res)=>{
    try {
        const {course_name} = req.body
        const imgUrl = `${req.protocol}://${req.host}/uploads/${req.file.filename}`
        const newallcourses = await Courses.create({course_name, imgUrl})
        res.status(201).json({
            message: "Ma'lumotlar qo'shildi",
            newallcourses
        })
    } catch (error) {
        ServerError(res, error)
    }
}

const updateAllcourses = async (req, res)=>{
    try {
        const user = await req.user
        const {course_name} = req.body
        const imgUrl = `${req.protocol}://${req.host}/uploads/${req.file.filename}`
        if(!course_name||!imgUrl){
            ValidError(res, 300, "Barcha zonalarni to'ldiring!")
        }
        await Courses.update({course_name, imgUrl}, {where: {id: user.id}})
        res.status(201).json({
            message: "Ma'lumotlar yangilandi"
        })
    } catch (error) {
        ServerError(res, error)
    }
}

const deleteCourses = async (req, res)=>{
    try {
        const {id} = req.params
        const existCourses = await Courses.findOne({where: {id}})
        if(!existCourses){
            ValidError(res, 300, "Ma'lumot toplilmadi")
        }
        await Courses.destroy({where: {id: existCourses.id}})
        res.status(201).json({
            message: "Muvaffaqiyatli qo'shildi"
        })
    } catch (error) {
        ServerError(res, error)
    }
}

module.exports = {
    getAllcourses,
    postAllcourses,
    updateAllcourses
}