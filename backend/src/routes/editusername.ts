import {Router,Request,Response} from 'express'
import verifyJWT from '../middlewares/authmiddleware'
import {UserModel} from '../models/user'
const editusernamerouter = Router()
import { JwtPayload } from 'jsonwebtoken';
editusernamerouter.post('/editusername',verifyJWT,async (req: Request & { user?: JwtPayload},res:Response) => {
    try{
    const user_handle = req.user?.sub
    if(!user_handle){
        return res.status(401).json({
            success:false,
            message:"Unauthorized request"
        })
    }
    console.log(user_handle);
    //user_handle is unique 
    const user = await UserModel.findOne({user_handle});
    console.log(user)
    const newusername = req.body.username;
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User not found"
        })
    }
    user.username = newusername
    await user.save()
    res.json({
        success:true,
        message:"Username updated successfully",
        user
    })
}
    catch(error){
        console.log("Error in editusername route",error)
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
})

export default editusernamerouter