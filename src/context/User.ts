import { Schema, Model } from "mongoose";
import mongoose from "mongoose";
import { IUser } from "../interface/IUser";

const users = new Schema<IUser>({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },

})

const User: Model<IUser> = mongoose.model<IUser>('User', users);

export default User