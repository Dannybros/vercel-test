import express from 'express'
import CaseCollection from '../models/CaseModel.js'
import NewsCollection from '../models/NewsModel.js'
// import projImg from '../middlewares/ProjImg.js'
// import auth from '../middlewares/auth.js'
// import { uploadFile } from '../firebase/index.js';
// import { storage } from '../firebase/firebase.js';
// import { ref, getDownloadURL, deleteObject } from "firebase/storage";

const router = express.Router();

router.get('/', (req, res)=>{
    CaseCollection.find({}, (err, data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})

router.get('/news', (req, res)=>{
    NewsCollection.find({}, (err, data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})

export default router;