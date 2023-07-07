// console.log("HELLO WORLD")


const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017").then (() => {
console.log("Connected")


carModel.create({
    reg: "AL12DUW",
    make: "Mercedes",
    model: "A Class",

    reg: "DUWAL12",
    make: "Vauxhall",
    model: "Corsa"
}).then(() => {

    carModel.find({}).then(res =>{
        for (let car of res){
            console.log(car)
        }
            mongoose.disconnect()
    })
})
})

const carSchema = new mongoose.Schema({

    reg:String,
    make:String,
    model:String 
})

const carModel = mongoose.model("car", carSchema)
