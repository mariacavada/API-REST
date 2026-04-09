import User from "../models/users.model.js"

export const login = (req,res) =>{
     const {username, password} = req.body
     const user = User.findOne({username:username})
     if (user.password == password){
          res.json({login:true, msg: "Es Correcto Juan Pablo", user:user})
     }else{
          res.status(404).json({login:false, msg: "Es Incorrecto Juan Pablo", user:{}})
     }
}