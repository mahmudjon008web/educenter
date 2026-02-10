const { ServerError, ValidError } = require("../../service/validation")
const db = require("../../models")
const Teachers = db.Teachers

const getCoursetype = async (req, res)=>{
    try {
        const user = await req.user
        const coursetype = await Teachers.findAll()
        res.status(200).json(coursetype)
    } catch (error) {
        ServerError(res, error)
    }
}


const postCourseType = async (req, res)=>{
    try {
        const {teacher} = req.body
        const imgUrl = `${req.protocol}://${req.host}/uploads/${req.file.filename}`
        const newcoursetype = await Teachers.create({teacher, imgUrl})
        res.status(201).json({
            message: "Ma'lumotlar qo'shildi",
            newcoursetype
        })
    } catch (error) {
        ServerError(res, error)
    }
}

const updateCoursetype = async (req, res)=>{
    try {
        const user = await req.user
        const {teacher} = req.body
        const imgUrl = `${req.protocol}://${req.host}/uploads/${req.file.filename}`
        if(!teacher||!imgUrl){
            ValidError(res, 300, "Barcha zonalarni to'ldiring!")
        }
        await Teachers.update({teacher, imgUrl},{where: {id: user.id}})
        res.status(201).json({
            message: "Ma'lumotlar yangilandi"
        })
    } catch (error) {
        ServerError(res, error)
    }
}

const deleteCoursetype = async (req, res)=>{
    try {
        const {id} = req.params
        const existCourseType = await Teachers.findOne({where: {id}})
        if(!existCourseType){
            ValidError(res, 300, "Ma'lumot topilmadi")
        }
        await Teachers.destroy({where: {id: existCourseType.id}})
        res.status(201).json({
            message: "Muvaffaqiyatli o'chirildi"
        })
    } catch (error) {
        ServerError(res, error)
    }
}

module.exports = {
    getCoursetype,
    postCourseType,
    updateCoursetype,
    deleteCoursetype
}