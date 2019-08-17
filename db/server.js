const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const mongoConnect = require("./utility/database").mongoConnect;

const Jobs = require("./models/jobs");

var mongoose = require('mongoose');

const jobs=[
    {
        id:1,
        title: "NodeJs dev",
        description: "contract",
        location:"Delhi"
    },
    {
        id:2,
        title: "java dev",
        description: "full-time",
        location:"bangalore"
    },
    {
        id:3,
        title: "Mern dev",
        description: "full-time",
        location:"Gurugram"
    }
]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req,res,next){
    //Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin','*');
    //Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Method','GET, POST, OPTIONS, PUT, DELETE');
    //Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With, content-type');
    // Set to true if you need the website to include cookies in the requests
    //to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    if(req.method === "OPTIONS"){
        res.sendStatus(200);
    }
    //pass to next layer of middleware
    next();
})

// app.get("/", (req,res)=>{
//     res.send("<h1>hello-world</h1>")
// })

// app.get("/", (req,res)=>{
//     res.status(200).json({
//         name:"qwerty"
//     })
// }}

app.get("/jobs", (req,res)=>{
    let jobInstance = new Jobs();
    jobInstance.fetchAll().then((result)=>{
        console.log(result)
        return res.json(result)
    }).catch((err)=>{
        console.log(err);
        return res.json({message:"Failed", errorCode: -1})
    })
});

app.get("/jobs/:jobId",(req,res)=>{
    console.log(req.params.jobId);

    const jobId = req.params.jobId;
    // let filteredJob = jobs.filter((job, index)=>{
    //     return job.id == jobId;
    // })

    // res.json(filteredJob[0]);

    //mongodb
    let job = new Jobs();
    job.findById(jobId).then((result)=>{
        console.log(result)
        return res.json(result)
    }).catch((err)=>{
        console.log(err);
        return res.json({message:"Failed", errorCode: -1})
    });
})

app.get("/jobs/location/:location",(req,res)=>{
    const location = req.params.location.toLowerCase();
    let filteredJob = jobs.filter((job,index)=>{
        return job.location.toLowerCase() == location;
    })
    res.json(filteredJob[0]);   
})


app.post("/jobs",(req,res)=>{
    console.log(req.body);
    let id = req.body.id;
    let title = req.body.title;
    let description = req.body.description;
    let location = req.body.location;
    let newJob={
        id:id,
        title:title,
        description:description,
        location:location
    }

    //mongodb

    const job1 = new Jobs();
    job1.save(newJob).then((data)=>{
        console.log(data)
        return res.json({responseCode:"success",errorcode:1});
    }).catch((err)=>{
        console.log(err);
        return res.json({responseCode:"failed", errorcode:-1});
    })
    // jobs.push(newJob);
    // res.json(jobs);
})

app.post("/jobs/update/:id", (req,res)=>{
    let index=0;
    let filteredJobArray = jobs.filter((job, i)=>{
        if(job.id == req.params.id){
            index=i
        }
        return job.id == req.params.id
    })
    let filteredJob = filteredJobArray[0];
    updatedval={
        ...filteredJob,
        ...req.body
    }
    jobs.splice(index,1,updatedval);
    res.json(jobs);
})

app.post("/jobs/delete", (req,res)=>{
    let id = req.body.id;
    let index=0;
    jobs.filter((job, i)=>{
        if(job.id == id){
            index=i
        }
        return job.id == id;
    })
    jobs.splice(index,1);
    res.json(jobs);
})


app.get("/jobs", (req,res)=>{
    res.status(200).json(jobs);
})

// app.listen(3030, ()=>{
//     console.log("running");
// })

// mongoConnect(()=>{app.listen(3000)});

mongoose.connect('mongodb+srv://admin:admin@coding-xte7u.mongodb.net/test?retryWrites=true&w=majority').then(()=>{
    console.log("connected")
    app.listen(5000)
}).catch((err)=>{
    console.log(err);
});