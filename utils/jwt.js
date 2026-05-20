import jwt from "jsonwebtoken";

export const validateJWT = (req, res, next) => {
    let token = req.headers.authorization
    if (!token) {
        res.json({ msg: "Se necesita un token" })
        return
    }
    if (token.startsWith("Bearer")) {
        token = token.split(" ")[1]
    }
    jwt.verify(token, process.env.JWT, (e, decoded) => {
        if (e) {
            res.status(401).json({msg:e.message})
        }else {
            req.decoded = decoded
            next()
        }
    })
}