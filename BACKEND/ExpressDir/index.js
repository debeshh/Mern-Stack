const express = require("express");
const app = express ();

// console.dir(app);


let port = 3000;

app.listen(port, ()=> {
    console.log(`app is listning on port: ${port}`);
})

// app.use((req,res) =>{
//     res.send("Hello Debesh");
//     console.log("request received");
// })

app.get("/", (req,res)=>{
    res.send("You hitted home page");
})
// app.get("/search", (req,res)=>{
//     res.send("You hitted search page");
// })
// app.get("/contact", (req,res)=>{
//     res.send("You hitted contact page");
// })
// app.use((req,res)=>{
//     res.send("You hitted wrong page");
// })

// app.post("/",(req,res)=>{

// })

// app.get("/:username",(req,res)=>{
//     // console.log(req.params);
//     let {username} = req.params;
//     res.send(`welcome to the page of @${username}`);
// })


app.get("/search",(req,res)=>{
    let {q} = req.query;
    res.send(`search results for query ${q}` );
})
