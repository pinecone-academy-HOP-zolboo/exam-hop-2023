import mongoose from "mongoose";

export const connect = async () => {
  const url =
    "mongodb+srv://bilguun:AsId0.00@mongo.ywtcnkw.mongodb.net/todo-exam";
  try {
    await mongoose.connect(url);
    console.log("Successfully connected mongodb.");
  } catch (error) {
    console.log(error);
  }
};
