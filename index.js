require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Router = require('./routes/routes')
const swaggerUI=require('swagger-ui-express')
const swaggerJsDocs= require('./swagger.json')

app.use(bodyParser.json())
app.use("/api", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs))
app.use('/', Router)

app.listen(process.env.PORT, function (err) { 
  if(err){
    console.log("Error connecting to server")
    return
  }
  console.log("Successfully connected to server at port : " + process.env.PORT)
})