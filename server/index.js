const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const multer = require('multer');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/jobportal');
  console.log("DB connected")
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create a Multer instance
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Adjust the file size limit as needed (10 MB in this example)
});


const jobPostingData = new mongoose.Schema({
    "company": String,
    "desg":String,
    "description":String,
    "skill" : String,
    "link": String,
    "mail" : String,
    "yoe" : Number,
    "salary" : Number,
    "type" : String,
    "image" : String,
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

// server.use(bodyParser.json({limit: "50mb"}));
// server.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
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
    jData.image = req.body.image;
    jData.type = req.body.type;



    const doc = await jData.save()
    
    console.log(doc)
    res.json(doc);
})
// server.post("/fetchData", upload.single('image'), async (req, res) => {
//   try {
//     // Create a new instance of JobPostData with the request body
//     console.log(req.body);
//     const jData = new JobPostData({
//       company: req.body.company,
//       desg: req.body.designation,
//       description: req.body.description,
//       skill: req.body.skill,
//       link: req.body.link,
//       yoe: req.body.yoe,
//       salary: req.body.salary,
//       mail: req.body.mail,
//       type: req.body.type,
//       image: req.file.image // Save the image path from the uploaded file
//     });

//     // Save the job posting data to MongoDB
//     const doc = await jData.save();
//     res.json(doc);
//   } catch (error) {
//     console.error("Error saving job posting data:", error);
//     res.status(500).json({ status: "error", message: "Failed to save job posting data" });
//   }
// });


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
