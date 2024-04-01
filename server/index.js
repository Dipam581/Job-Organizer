const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
//const ExpenseModel = require("./models/Expense")

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/jobportal');
  console.log("DB connected")
}

const jobPostingData = new mongoose.Schema({
    "company": String,
    "desg":String,
    "description":String,
    "skill" : String,
    "link": String,
    "yoe" : Number,
    "salary" : Number,
    "mail" : String,
  });

  const JobPostData = mongoose.model('Jobdata', jobPostingData);



const server = express();

server.use(cors());
const corsConfig = {
  origin: '',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}
server.use(cors(corsConfig))
server.options("", cors(corsConfig))


server.use(bodyParser.json());


server.get("/", (req, res) => {
  res.send("Express on Vercel");
});

server.post("/fetchData",async (req,res)=>{
    let jData = new JobPostData();
    console.log("from server: ",req.body)
    jData.company = req.body.company;
    jData.desg = req.body.designation;
    jData.description = req.body.description;
    jData.skill = req.body.skill;
    jData.link = req.body.link;
    jData.yoe = req.body.yoe;
    jData.salary = req.body.salary;
    jData.mail = req.body.mail;

    const doc = await jData.save()
    
    console.log(doc)
    res.json(doc);
})

server.get("/fetchData",async (req,res)=>{
    const data = await JobPostData.find({})
    res.json(data);
    
})


server.post("/update",async (req,res)=>{
  const editData = req.body;
  console.log(editData)
  try {
    await JobPostData.updateOne({_id : editData._id},{
      $set: {
        item : editData.item,
        cost : editData.cost
      }
    })
    return res.json({status : "ok", data : "updated"})
  } catch (error) {
    return res.json({status : "error", data : error})
  }
})



server.listen(8080,()=>{
    console.log("started")
})
