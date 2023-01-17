import express from 'express'
import test from './routes/test.js'

const app = express();

app.use(express.json());

const port = process.env.PORT || 9000;

app.get('/', (req, res)=>{
    res.send("Hello BOy");
})

app.use('/test', test)

app.listen(port, ()=>console.log(`Server starting in port ${port}`));