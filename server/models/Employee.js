const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    dept:String,
    serialNum:String
})
const EmployeeModel = new mongoose.model("employees", EmployeeSchema)
module.exports= EmployeeModel