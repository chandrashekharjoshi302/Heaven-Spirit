const express=require("express")
const { CartModel } = require("../models/cart.model")

const cartRouter=express.Router()

cartRouter.get("/",async(req,res)=>{
    let userID=req.body.userID
    let data=await CartModel.find({userID})
    res.send(data)
    // res.send("hey i am here")
})

cartRouter.post("/create",async(req,res)=>{
    let data=req.body
    let User=new CartModel(data)
    await User.save()
    res.send("Added SuccessFully")
})

cartRouter.patch("/modify/:id",async(req,res)=>{
    let id=req.params.id
    let data=req.body
    let userData=await CartModel.find({_id:id})
    if(userData[0].userID=data.userID){
        await CartModel.findByIdAndUpdate(id,data)
        res.send("Updated Succesfully")
    }else{
        res.send("You cannot modify the data.")
    }
})

cartRouter.delete("/delete/:id",async(req,res)=>{
    let id=req.params.id
    let userData=await CartModel.find({_id:id})
    try {
        
        if(userData[0].userID==req.body.userID){
            await CartModel.findByIdAndDelete(id)
            res.send("Deleted Succesfully.")
        }else{
            res.send("You can't delete this route.")
        }
    } catch (error) {
        res.send({error})
    }
})

module.exports={
    cartRouter
}