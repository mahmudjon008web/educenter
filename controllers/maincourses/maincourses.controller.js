const { ServerError, ValidError } = require("../../service/validation")
const db = require("../../models")
const Courses = db.Courses

const getMaincourses = async (req, res)=>{
    try {
        const user = await req.user
        const allcourses = await Courses.findAll()
        res.status(200).json(allcourses) 
    } catch (error) {
        ServerError(res, error)
    }
}

const postMaincourses = async (req, res)=>{
    try {
        const {course_name, about} = req.body
        const imgUrl = `${req.protocol}://${req.host}/uploads/${req.file.filename}`
        const newAllcourses = await Courses.create({course_name, about, imgUrl})
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
        const {course_name, about} = req.body
        const imgUrl = `${req.protocol}://${req.host}/uploads/${req.file.filename}`
        if(!course_name||!about||!imgUrl){
            ValidError(res, 300, "Barcha zonalarni to'ldiring!")
        }
        await Courses.update({course_name, about, imgUrl}, {where: {id: user.id}})
        res.status(201).json({
            message: "Ma'lumotlar yangilandi!"
        })
    } catch (error) {
        ServerError(res, error)
    }
}

const deleteMainCourses = async (req, res)=>{
    try {
        const {id}=req.params
        const existMainCourses = await Courses.findOne({where: {id}})
        if(!existMainCourses){
            ValidError(res, 300, "Ma'lumot topilmadi")
        }
        await db.Teachers.destroy({where: {id: existMainCourses.id}})
        res.status(201).json({
            message: "Muvaffaqiyatli o'chirildi"
        })
    } catch (error) {
        ServerError(res, error)
    }
}

module.exports = {
    getMaincourses,
    postMaincourses,
    updateMaincourses,
    deleteMainCourses
}