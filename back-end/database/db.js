import mongoose from "mongoose";
const uri =
  "mongodb+srv://Fulxe:Mutum1205@test-database.l5z1bhc.mongodb.net/todo-list?retryWrites=true&w=majority";

export const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};

