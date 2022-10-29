const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const pool = require('./Pool');
const cors = require('cors');
const path = require('path');
//routes




const corsOptions ={
  origin:'https://scholarshipx.herokuapp.com/', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}



app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.static("./client/build"));


app.use(cors(corsOptions))
require('dotenv').config();
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://scholarshipx.herokuapp.com/');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}) 

app.get("/default", async(req,res) =>{
  const data = await pool.query("SELECT * FROM scholarships LIMIT 10");
  res.json(data.rows)
})
app.post("/getScholarShips", async(req,res) =>{
  const keyword = req.body.keyWord;
  const data = await pool.query("SELECT * FROM scholarships WHERE $1 = ANY (keywords)", [keyword]);
  const data2 = await pool.query("SELECT * FROM scholarships WHERE name LIKE '%" + keyword+"%'");
  const finals = [];
  for(let i = 0; i<data.rowCount; i++){
   finals.push(data.rows[i]) 
  }
  for(let i = 0; i<data2.rowCount; i++){
    finals.push(data2.rows[i]) 
   }

  res.json(finals);

})

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})