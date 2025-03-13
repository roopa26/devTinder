const express = require("express");
const app = express();


app.use("/hello",(req, res)=>{
    res.send("Hi from hello page")
});
app.use("/test",(req, res)=>{
    res.send("Hi from test page")
});
app.use("/",(req, res)=>{
    res.send("Hi from dashbord page")
});

app.listen(3000,()=>{
    console.log("server connected successfully at port 7777")
});
