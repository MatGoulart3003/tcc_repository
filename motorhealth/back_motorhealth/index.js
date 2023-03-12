const express = require('express');
const server = express();

server.get('/', (req,res)=>{
    return res.json({msg: 'API respondeu!'})
});

server.listen(3000, () => {
    console.log('Server rodando na porta 3000')
});