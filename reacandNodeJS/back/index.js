require('dotenv').config();
const mongoose = require('mongoose')

const connectDB = require('./config/db')
connectDB()


const express = require('express')
const app = express()
app.use(express.json())

const setEvent = require('./controllers/EventController')
const getAllEvent = require('./controllers/EventController')

app.get('/api/all/events', getAllEvent);
app.post('/api/create/event', setEvent);

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on PORT ${process.env.PORT}`);
})