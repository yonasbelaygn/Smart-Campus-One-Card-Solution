const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const multer =require("multer")
const path= require("path")
const EmployeeModel= require("./models/Employee")
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Employee")

app.post("/login", (req, res)=>{
    const{fname, lname} = req.body
    EmployeeModel.findOne({fname: fname})
    .then(user => {
        if(user){
            if(user.lname === lname){
                res.json("Success")
            }
            else{
                res.json("password error")
            }
        }
        else{
            res.json("no record existed")
        }
    })
})

app.get('/checks', async (req, res) =>{
  try {
    const { serialNum } = req.query; // Get serialNum from query parameters
    if (!serialNum) {
        return res.status(400).json({ message: 'serialNum is required' });
    }
    const device = await EmployeeModel.findOne({ serialNum }); // Find device by serialNum
    if (!device) {
        return res.status(404).json({ message: 'No records' }); 
    }
    res.json(device);
} catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
}
})

app.post('/register', (req, res)=>{
EmployeeModel.create(req.body)
.then(employees=>res.json(employees))
.catch(err=> res.json(err))
})
/*EmployeeModel.create(req.body)
EmployeeModel.create({image: req.file.filename})
.then(employees=>res.json(employees))
.catch(err=> res.json(err))
})*/
/*app.post('/upload', upload.single('file'), (req, res)=>{
    EmployeeModel.create({image: req.file.filename})
    .then(result => res.json(result))
    .catch(err => console.log(err))
})*/
app.listen(3001, ()=>{
    console.log("server is running....")
})