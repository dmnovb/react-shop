require("dotenv").config();

const express = require("express")
const app = express()
const mongoose = require("mongoose")
var cors = require('cors')
app.use(cors())

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to Database"))

app.use(express.json())

const shopRouter = require("./routes/shop")

app.use('/shop', shopRouter)

app.listen(4000, () => {
    console.log("Connected to Server")
})