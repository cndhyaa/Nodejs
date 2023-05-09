const express = require ("express");
const app = express();

const PORT= process.env.PORT || 5000;

app.get("/", (req, res)=>{
    res.send("Hi, I am sandhya.");
});
 
app.get("/ram", (req, res)=>{
    res.send("Hi, I am ram.");
});
 
// const start = async () =>{
    try{
        app.listen(PORT, ()=>{
            console.log(`${PORT} Yes I am connected`) ;
        });
    }catch (error){
        console.log(error);
    }
// }