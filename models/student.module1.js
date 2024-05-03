import { mongoose, version } from "mongoose";
//schema
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 19,
    },
    email: {
      type: String,
      require: true,
      lowercase: true,
      minLength: 15,
    },
    subjects: [String],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default mongoose.model("student", studentSchema);
