const { ServerError, ValidError } = require("../../service/validation")
const db = require("../../models/index")
const Teachers = db.Teachers

const getTeachers = async (req, res)=>{
    try {
        const user = await req.user
        const teachers = await Teachers.findAll() 
        res.status(200).json(teachers)
    } catch (error) {
        ServerError(res, error)
    }
}

const postTeachers = async (req, res)=>{
    try {
        const {fullName, level, about, experience, students, goodStudents} = req.body
        const imgUrl = `${req.protocol}://${req.host}/uploads/${req.file.filename}`
        const newTeacher = await Teachers.create({fullName, level, about, experience, students, imgUrl, goodStudents})
        res.status(201).json({
            message: "Muvaffaqiyatli qo'shildi",
            newTeacher
        })
    } catch (error) {
        ServerError(res, error)
    }
}

const updateTeachers = async (req, res)=>{
    try {
        const user = await req.user
        const {fullName, level, about, experience, students, goodStudents} = req.body
        const imgUrl = `${req.protocol}://${req.host}/uploads/${req.file.filename}`
        if(!fullName||!level||!about||!experience||!students||!imgUrl||!goodStudents){
            ValidError(res, 300, "Barcha zonalarni to'ldiring!")
        }
        await Teachers.update({fullName, level, about, experience, students, imgUrl, goodStudents}, 
            {where: {id: user.id}}
        )
        res.status(201).json({
            message: "Malumotlar yangilandi!"
        })
    } catch (error) {
        ServerError(res, error)
    }
}

const deleteTeachers = async (req, res)=>{
    try {
        const {id} = req.params
        const existTeacher = await Teachers.findOne({where: {id}})
        if(!existTeacher){
            ValidError(res, 300, "Ma'lumot topilmadi!")
        }
        await Teachers.destroy({where: {id: existTeacher.id}})
        res.status(201).json({
            message: "Muvaffaqiyatli o'chirildi"
        })
    } catch (error) {
        ServerError(res, error)
    }
}


module.exports = {
    postTeachers,
    getTeachers,
    updateTeachers,
    deleteTeachers
}