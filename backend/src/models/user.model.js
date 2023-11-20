import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: String,
    lastName: String,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { collection: "users" },
);

const UserModel = model("User", userSchema);

export default UserModel;
