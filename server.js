const express = require('express')
const app = express()
const path = require('path');

app.get('/', function (req,res) {
    res.sendFile( path.join(__dirname, 'public/index.html'))
})

app.get('/js', function (req,res) {
    res.sendFile( path.join(__dirname, 'public/main.js'))
})

app.get('/styles', function (req,res) {
    res.sendFile( path.join(__dirname, 'public/styles.css'))
})

app.post('/api/addtrip', (req, res) => {
    let {name} = req.body
    name = name.trim()

    const index = addtrip.findIndex((tripname) => { 
        return tripname === name
    })
})

const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Server is running on ${port}`)
})