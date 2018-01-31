let values = {
    name: 'corydon'
}
let users=[
    {id:1,
    name:'nate'},
    {id:2,
    name:'bri'}
]

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

app.listen(process.env.PORT, () => { console.log('i\'m always watching') })


// === endpoints === //
app.get('/api/get', (req, res) => {
    res.status(200).json(values)
})

app.put('/api/put', (req,res)=>{
    values=Object.assign({}, values, req.body)
    res.status(200).json(values)
})

app.post('/api/post', (req,res)=>{
    values=req.body;
    res.status(200).json(values)
})

app.delete('/api/delete', (req,res)=>{
    values={}
    res.status(200).send('it is done.')
})
app.get('/api/getuser/:id', (req, res)=>{
    let user = users.find(user=>user.id==req.params.id)
    res.status(200).json(user)
})
app.get('/api/getuser', (req, res)=>{ //use query i.e. api/getuser?name=nate
    console.log('req.query',req.query)
    let user = users.find(user=>req.query.name==user.name)
    if(user) res.status(200).json(user)
    res.status(200).send('no such user found.')
})
app.post('/api/addmessage', (req,res)=>{ // json format: {"message": [your message here]}
    const db = app.get('db')
    db.add_message(req.body.message)
    res.status(200).send('message added')
})
app.get('/api/getmessage', (req,res)=>{ // will grab all db messages and return to user
    const db = app.get('db')
    db.get_messages().then(messages=>{
        res.status(200).json(messages)
    })
})
// === === === === === //