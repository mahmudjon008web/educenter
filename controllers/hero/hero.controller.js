const { ServerError, ValidError } = require("../../service/validation")
const db = require("../../models/index")
const Hero = db.Hero


const postHero = async (req, res)=>{
    try {
        const {title, text} = req.body
        const imageUrl = `${req.protocol}://${req.host}/uploads/${req.file.filename}`
        const newHero = await Hero.create({title, text, imageUrl})
        res.status(201).json({
            message: "Ma'lumot qo'shildi",
            newHero
        })
    } catch (error) {
        ServerError(res, error)
    }
}



const getHero = async (req, res)=>{
    try {
        const user = await req.user
        const hero = await Hero.findAll({where: {id: user.id}})
        res.status(200).json(hero)
    } catch (error) {
        ServerError(res, error)
    }
}


const updateHero = async (req, res)=>{
    try {
        const user = await req.user
        const {title, text} = req.body
        const imageUrl = `${req.protocol}://${req.host}/uploads/${req.file.filename}`
        if(!title || !text || !imageUrl){
            return ValidError(res, error, "Barcha zonalarni to'ldiring!")
        }
        await Hero.update({title, text, imageUrl}, 
            {where: {id: user.id}}
        )
        res.status(200).json({
            message: "Muvaffaqiyatli yangilanish"
        })
    } catch (error) {
        ServerError(res, error)
    }
}

module.exports = {
    getHero,
    postHero,
    updateHero
}