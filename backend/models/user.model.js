import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["user"],
    default: "user"
  },

  name: String,
  email: {
  type: String,
  unique: true,
  sparse: true   // 🔥 ADD THIS
},
  password: String,

  addresses: [
    {
      label: String,
      street: String,
      city: String,
      state: String,
      pincode: String,
      isDefault: { type: Boolean, default: false }
    }
  ],

  registrationStep: {
    type: Number,
    default: 1
  }

}, { timestamps: true });

export default mongoose.model("User", userSchema);