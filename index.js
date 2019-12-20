const express = require('express')
const app = express()
const port = 3000
// this line is to tell express to server 
// to search for any static files in frontend
app.use(express.static('frontend'))

app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html'))
app.get('/login', (req, res) => res.send('Login'))
app.get('/register', (req, res) => res.send('Register'))

var student = {"name" : "Being 0" , "cllge" : "Vnrvjiet" , "regno" : "17071A1252"}
app.get('/data',(req,res) => res.json(student))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))