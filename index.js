import express from 'express'

const app = express();

app.use(express.json());

const port = process.env.PORT || 9000;

app.get('/', (req, res)=>{
    res.send("Hello Danny");
})

app.listen(port, ()=>console.log(`Server starting in port ${port}`));