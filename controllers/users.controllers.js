import User from "../models/users.model.js"


export const getUser = async (req,res) => {
     const users = await User.find()
     res.json(users)
}
export const getUsers = async (req,res) => {
     const id = req.params.id
     const user = await User.findById(id)
     res.json(user)
}
export const postUser = async (req,res) => {
     const {name, username, password} = req.body
     const userInstance = new User(name, username, password)
     await user.save()
     res.json(user)
}
export const putUser = async (req,res) => {
 //findyIDandUpdate
}
export const delUser = async (req,res) => {
//find.byIDandDelete
}