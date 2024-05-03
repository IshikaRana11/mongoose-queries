import { mongoose } from "mongoose";
//schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
export default mongoose.model("student", studentSchema);
