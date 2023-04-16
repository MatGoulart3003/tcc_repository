const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json());

const users = []
const cars = []

app.get('/users',(req,res)=>{
    res.json(users)
})

app.get('/usersCars', (req,res)=>{
    res.json(cars)
})

app.post ('/users', async (req,res)=>{
    try{
        const hasedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { username: req.body.username, password: hasedPassword}
        users.push(user)
        res.status(201).send()
    }catch{
        res.status(500).send()
    }
})

app.post ('/users/login', async (req,res)=>{
    const user = users.find(user => user.username === req.body.username)
    console.log(user)
    if(user == null){
        return res.status(400).send('Usuário nulo')
        
    }

    try{
        if (await bcrypt.compare(req.body.password, user.password)){
            res.send('Logado')
            
        }else{
            res.status(403).send('Usário/senha incorretos')
        }
    }catch{
        res.status(500).send();
    }
})

app.post ('/usersCars/create', async (req,res) =>{
    try{
        const car = { anoCarro: req.body.anoCarro, 
                      combustivel: req.body.combustivel,
                      marcaCarro: req.body.marcaCarro,
                      modeloCarro: req.body.modeloCarro,                     
                      }
        cars.push(car)
        res.status(201).send("Carro criado com sucesso")
    }catch{
        res.status(500).send()
    }
})

app.listen(3000);

