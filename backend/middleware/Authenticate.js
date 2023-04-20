require("dotenv").config()
const jwt=require("jsonwebtoken")

const authenticate=(req,res,next)=>{
    const token=req.headers.authorization
   
    if(token){
        try {
            const decoded=jwt.verify(token,process.env.key)
            req.body.userID=decoded.userID
           
                next()
        }
        catch (error) {
            console.log(error)
                res.send("Please Login First.")
        }
    }else{
        res.send("Please Login First.")
    }
}

module.exports={
    authenticate
}