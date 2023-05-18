const mongoose = require("mongoose");

const uri = "mongodb+srv://Khatnaa:Khatnaa0622@cluster0.8lha21r.mongodb.net/?retryWrites=true&w=majority";
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected mongodb");
  } catch (error) {
    console.log(error);
  }
};
mongoose.set('strictQuery', true);
module.exports = connect;