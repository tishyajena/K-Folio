import {  Router,Request, Response } from 'express';
import verifyJWT from '../middlewares/authmiddleware';
import { UserModel } from '../models/user';
const editbiorouter = Router()
import { JwtPayload } from 'jsonwebtoken';
editbiorouter.post('/editbio', verifyJWT, async (req: Request & { user?: JwtPayload}, res: Response) => {
  try {
    const user_handle = req.user?.sub;
    if (!user_handle) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized request",
      });
    }

    const user = await UserModel.findOne({ user_handle });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const newbio = req.body.bio;
    user.bio = newbio;
    await user.save();

    res.json({
      success: true,
      message: "Bio updated successfully",
      user,
    });

  } catch (error: any) {
    console.log("Error in editprofile route:", error);

    // Handle Mongoose validation error
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err: any) => err.message);
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: messages,
      });
    }

    // Other errors
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default editbiorouter
