const mongoose=require('mongoose');
const connectwithdb=()=>{
mongoose.connect("mongodb+srv://blogheaven:DPPVvEPQF868eIBT@cluster0.mpxvfkk.mongodb.net/blogheaven")
.then(()=>{
    console.log("connect with db");
})
.catch((err)=>{
    console.log(err);
})
}
exports.connectwithdb=connectwithdb;