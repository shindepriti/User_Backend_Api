const service = require("../service/UserService")
const { check, validationResult } = require('express-validator');

class UserController {
    create = (req, res) => {
    check('firstName').isLength({ min : 3}).withMessage("Fistname must contain 3 characters")
    check('lastName').isLength({ min : 3}).withMessage("Lastname must contain 3 characters")
    check('emailId').isEmail().withMessage("Invalid Email")
    check('password').isLength({min:8}).withMessage("password must contain 8 character")
    
    var errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
    else{
        service.create(req.body,((err,data) => {
            if(err){
                res.status(500).send({
                    message:err.message || "Some Error has Occured"
                })
            }
            res.json(data)
        }))
    }
     
   
}

login = (req,res)=>{

    service.login(req.body,((err,data) =>{
            if(err){
                res.status(500).send({
                    message:err.message || "Server Error"
                })
            }
            res.send(data)           
        }))

    
}
}
module.exports = new UserController;
    