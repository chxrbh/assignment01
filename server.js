const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const uri = "mongodb+srv://c:dbpassword@firstweb.qkn2dv3.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
  try {
    await mongoose.connect(uri)
    console.log("connected to MongoDB")
  }
  catch {
    console.log(error)
  }
}

connect()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});

const userRouter = require('./back/routes/users')
app.use('/users', userRouter)
// http://localhost:8000/users/

app.listen(8000, () => {
  console.log("server started on port 8000");
});
