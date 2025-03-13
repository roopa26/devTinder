const express = require("express");
const app = express();

app.get("/a(b)?c",(req, res)=>{
    res.send("Hi from abc page")
});

app.get("/user/:userId",(req, res)=>{
    const {userId} = req.params
    console.log(userId)
    res.send(`Hi from user ${userId}`)
});

app.use("/hello",(req, res)=>{
    res.send("Hi from hello page")
});
app.use("/test",(req, res)=>{
    res.send("Hi from test page")
});
// app.use("/",(req, res)=>{
//     res.send("Hi from dashbord page")
// });

app.listen(3000,()=>{
    console.log("server connected successfully at port 7777")
});
