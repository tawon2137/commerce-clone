require('dotenv').config();


const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())



/**
 * app Route
 * 
 */
app.use(require('./route'));

// API ENDPOINTS
const port = 8080;
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})