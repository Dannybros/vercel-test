const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT || 9000;

app.get('/', (req, res)=>{
    res.send("Hello World");
})

app.listen(port, ()=>console.log(`Server starting in port ${port}`));