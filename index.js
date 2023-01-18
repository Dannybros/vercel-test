import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
// import cases from './routes/Cases.js'
// import donation from './routes/Donation.js'
// import news from './routes/News.js'
// import signIn from './routes/SignIn.js'
// import stripe from './routes/Stripe.js'
// import paypal from './routes/Paypal.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
})
mongoose.connection.on("connected", ()=>{
    console.log("Mongoose is connected");
})

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.send("testing simply");
})
// app.use('/cases', cases)


app.listen(port, ()=>console.log(`Server starting in port ${port}`));