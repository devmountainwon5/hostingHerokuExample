const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const path = require('path');
require('dotenv').config();

const app = express();

massive(process.env.DATABASE_URL)
    .then((dbInstance)=>{
        app.set('db', dbInstance)
        console.log('Db is connected')
    })
app.use(cors())
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
/// Serves static files (Frontend). Must be above all of the routes.
app.use(express.static(path.join(__dirname, '/build')));

app.get('/api/ping', (req,res)=>{
    res.send('Healthy!');
})



/// Catch all for routing. Must be below all other routes. 
app.get('/*', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, "build")
      })
});
const port = process.env.PORT || 8090
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})

