import { mongoose } from "mongoose";
import studentModel from "./models/student.module1.js";
mongoose.connect("mongodb://localhost/newdb");
const db = mongoose.connection;
db.on("error", () => {
  console.log("error while connecting to db");
});
db.once("open", () => {
  console.log("connected to the database");
  //logic
  init();
  dbQueries(); //for queries on database
});
async function init() {
  //logic to insert in data base
  const student = {
    name: "sachin",
    age: 19,
    email: "ishikaishik11@gmail.com",
    subjects: ["data-science", "machine learning", "web development"],
  };
  const std_obj = await studentModel.create(student);
  console.log(std_obj);
}

async function dbQueries() {
  //Read the data
  //from id
  console.log("Inside the db queries");
  try {
    const student = await studentModel.findById("663457f08172d5b676bb58da");
    console.log(student);
  } catch (err) {
    console.log(err);
  }
  //want to search by name
  try {
    // const student = await studentModel.find({ name: "sachin" });
    const student = await studentModel.findOne({ name: "sachin" });
    console.log(student);
  } catch (err) {
    console.log(err);
  }
  //with multiple condition
  //use of where clause
  const students = await studentModel
    .where("age")
    .gt("10")
    .where("name")
    .equals("sachin")
    .limit(2);
  console.log(students);
  //deletion
  const student = await studentModel.deleteOne({ name: "sachin" });
  console.log(student);
}
