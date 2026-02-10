const db = require("../../models")
const User = db.User
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { ServerError, ValidError } = require("../../service/validation")
const {hashPassword} = require("../../service/hashPassword")
const registerAdmin = async ()=>{
    try {
        const existUser = await User.findOne({where: {phone: process.env.ADMIN_PHONE}})

        if(!existUser){
            await User.create({
                username: process.env.ADMIN_NAME,
                phone: process.env.ADMIN_PHONE,
                password: await hashPassword(process.env.ADMIN_PASS, 10),
                role: "superuser"
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
  try {
    const { password, phone } = req.body;
    const user = await User.findOne({ where: { phone } });
    if (!user) {
      return ValidError(res, 404, "Parol yoki Foydalanuvchi xato!");
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return ValidError(res, 400, "Parol yoki Foydalanuvchi xato!");
    }
    const token = jwt.sign(
      {
        id: user.id,
        phone: user.phone,
        role: user.role,
      },
      process.env.SECRET_KEY,
      { expiresIn: "7d" }
    );
    await User.update({
        isLogged: true
    }, {
        where: {id: user.id}
    })
    res.status(200).json({
      message: "Akauntga kirildi!",
      token,
    });
  } catch (error) {
    ServerError(res, error);
  }
};

// ROUTE: /auth/logout
// METHOD: POST
// ACCESS: private
const logout = async (req, res) => {
  try {
    const user = await req.user;
    await User.update(
      {
        isLogged: false,
      },
      {
        where: {
          id: user.id,
        },
      }
    );
    res.status(200).json({
      message: "Muvaffaqiyatli chiqildi!",
    });
  } catch (error) {
    ServerError(res, error);
  }
}

const deleteAdmin = async (req, res)=>{
  try {
    const {id} = req.params
    const existAdmin = await User.findOne({where: {id}})
    if(!existAdmin){
      ValidError(res, 300, "Ma'lumot topilmadi!!!")
    }
    await User.destroy({where: {id: existAdmin.id}})
    res.status(201).json({
      message: "Muvaffaqiyatli o'chirildi!"
    })
  } catch (error) {
    ServerError(res, error)
  }
}

module.exports = {
    registerAdmin,
    login,
    logout,
    deleteAdmin
}