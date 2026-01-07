import {Request,Response,NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import  {JwtPayload} from 'jsonwebtoken'

//middleware to verify jwt token 
const verifyJWT = async(req: Request & { user?: JwtPayload},res:Response,next:NextFunction) => {
  try {
    const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ","")
    if(!token){
      return res.status(401).json({
        success:false,
        message:"Unauthorized request"
      })
    }
    const decodedToken = jwt.verify(token,process.env.JWT_SECRET!) as JwtPayload
    req.user = decodedToken
    next()
  } catch (error) {
    console.log("Error in verifyJWT middleware",error)
    return res.status(401).json({
      success:false,
      message:"Invalid access token"
    })
  }
}

export default verifyJWT