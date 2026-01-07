import { Schema, model, models, InferSchemaType } from "mongoose";

const userSchema = new Schema(
  {
    // handles mongodb schema and type validation

    // unique user handle
    user_handle: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    // Real name of the user
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar_url:{
     type:String,
     trim:true,
     default:""
    },
    bio:{
      type:String,
      maxlength:150,
      trim:true,
      default:""
    },
    following_count:{
      type:Number,
      default:0
    },
    followers_count:{
      type:Number,
      default:0
    }
  },
  {
    timestamps: true,
  }
);

export type User = InferSchemaType<typeof userSchema>;
export const UserModel = models.User || model("User", userSchema);
