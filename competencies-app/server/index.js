let values = {
    name: 'corydon'
}

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require('express-session')
const massive = require('massive')

require('dotenv').config()

const app = express()
app.use(bodyParser.json())
app.use(cors())

massive(process.env.DB_CONNECTION).then(db => {
    app.set('db', db)
})

app.listen(3049, () => { console.log('i\'m always watching') })


// === endpoints === //
app.get('/api/get', (req, res) => {
    res.status(200).send("okeydokey")
})

// === === === === === //