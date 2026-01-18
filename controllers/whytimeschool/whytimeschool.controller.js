const { ServerError, ValidError } = require("../../service/validation")
const db = require("../../models/index")
const Whyeducenter = db.Whyeducenter

const getWhyeducenter = async (req, res)=>{
    try {
        const user = req.user
        const educenter = await Whyeducenter.findAll({where: {id: user.id}})
        res.status(200).json(educenter)
    } catch (error) {
        ServerError(res, error)
    }
}


const postWhyeducenter = async (req, res)=>{
    try {
        const imgUrl = `${req.protocol}://${req.host}/uploads/${req.file.filename}`
        const {title, text} = req.body
        const newWhyeducenter = await Whyeducenter.create({title, text, imgUrl})
        res.status(200).json({
            message: "Muvaffaqiyatli qo'shildi"
        })
    } catch (error) {
        ServerError(res, error)
    }
}


const updateWhyeducenter = async (req, res)=>{
    try {
        const user = req.user
        const imgUrl = `${req.protocol}://${req.host}/uploads/${req.file.filename}`
        const {title, text} = req.body
        if(!title||!text||!imgUrl){
            ValidError(res, 300, "Barcha zonalarni to'ldiring!")
        }
        await Whyeducenter.update({title, text, imgUrl}, 
            {where: {id: user.id}}
        )
    } catch (error) {
        ServerError(res, error)
    }
}

module.exports = {
    getWhyeducenter,
    postWhyeducenter,
    updateWhyeducenter
}