const express = require('express');
const server = express();
const carros = require('./src/data/carros.json')

server.get('/carros', (req,res)=>{
    return res.json({carros})
});

server.listen(3000, () => {
    console.log('Server rodando na porta 3000')
});