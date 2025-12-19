const express=require("express");
const app=express();
app.get("/",(req,res)=>{
res.send("hello from nodejs");
});
app.listen(3000,()=>{
console.log("node server running on port 3000");
});

