const mongoose = require("mongoose")
const { Schema } = mongoose;

const studentSchema = new Schema({
  name:  {
    type : String,
    unique : true
  },
  id: Number,
  tel:   String,
  address: String,
  food: String,
  grade: String,
  nation: String,
  status : String
});
module.exports = mongoose.model("Student", studentSchema)