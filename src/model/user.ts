import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
