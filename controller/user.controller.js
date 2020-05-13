const service = require("../service/user.service")

exports.create = (req, res) => {
    
    if(!req.body.emailId) {
        return res.status(500).send({
            message:"Registration Can Not Be Empty"
        });
    }

    const registration = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        emailId : req.body.emailId,
        password : req.body.password

    }
    
    service.create(registration,((err,data) => {
        if(err){
            req.status(500).send({
                message:err.message || "Some Error has Occured"
            })
        }
        console.log("Inside Controller",data)
        res.json(data)
    }))
}

exports.findAll = (req,res)=>{

        service.findAll(req,((err,data) =>{
            if(err){
                res.status(500).send({
                    message:err.message || "Server Error"
                })
            }
            res.send(data)           
        }))
    
}
    
exports.findOne = (req,res) =>{
    
    service.findOne(req,((err,data) =>{
        if(err){
            res.status(500).send({
                message:err.message || "Server Error"
            })
        }
        
        res.send(data)
        
    }))
    
}
