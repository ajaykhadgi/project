const express = require('express')
const axios = require('axios')
const app = express()
//why we need cors is 
// react ra node ko req haru handle garney  jatha vavi req paudaina so corse use garxau
// const cors = require('cors')
// // const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
// app.use(bodyParser.json())
// app.use(cors())
const port = 3005;

axios.post('/user', {
    firstName: 'Ajay',
    lastName: 'Khadgi'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
app.listen(3005, () => {
        console.log(`Server runnning on port ${port}`);
      });

// const uri = 'mongodb://localhost:27017/Lotterydb'

// const UserSchema = new mongoose.Schema({
//     name: {type: String, required: true},
//     isWinner: {type: Boolean, required: true},
//     lotteryNo: {type: Number, required: true}
// }, {
//     collection: 'users'
// })
// const Users = mongoose.model('UserModel', UserSchema)



// async function connect(){
//     try{
//         mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
//         console.log("connected to mongodb");
//     }catch(error){
//         console.error(error);
//     }
// }

// connect()
// app.delete('/participants/:id', async(req,res)=>{
//     const del = Users.findOneAndDelete({_id:req.params.id})
//     if(data){
//         res.json({
//             message:"delete"
//         })
//     }

// })

// app.post('/participants', async(req,res)=>{
// Users.create(req.body)
//     res.json({
//         detail:req.body
//     })

// })
 
// axios.get('/participants',async (req,res)=>{
//     const lotteryParticipants =await Users.find({})
//     res.json(lotteryParticipants)
// })
// app.put('/participants',async(req,res)=>{
//     const filter = {nam:req.bodyname}
//     const update = {isWinner: true}
//     const Reqputt= await Users.findOneAndUpdate(filter, update);
    
