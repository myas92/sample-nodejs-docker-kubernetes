const express = require('express');
const os = require('os');

const app = express()

app.get('/',(req, res)=>{
    res.send(`Hellllo from ${os.hostname()}`)
})

app.listen(3001, ()=>{
    console.log('running on 3001');
})