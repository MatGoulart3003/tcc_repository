const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json());

const manut = [
    {id:1, name: 'Troca de Correia Dentada'},
    {id:2, name: 'Revisão de Filtros'},
    {id:3, name: 'Troca do Filtro de Ar'},
    {id:4, name: 'Troca do Filtro de Combustivel'},
    {id:5, name: 'Troca do Filtro de Cabine'},
    {id:6, name: 'Troca do Óleo e Filtro de Óleo'},
    {id:7, name: 'Troca de Velas de Ignição'},
    {id:8, name: 'Troca dos Cabos de Vela'},
    {id:9, name: 'Revisão nos Freios'},
    {id:10, name: 'Troca de Pastilha de Freio'},
    {id:11, name: 'Troca de Lonas de Freio Traseiras'},
    {id:12, name: 'Revisão Geral'},
    {id:13, name: 'Revisão da Suspenção'},
    {id:14, name: 'Troca de Amortecedores'},
    {id:15, name: 'Revisão do Sistema de Arrefecimento'},
    {id:16, name: 'Revisão das Mangueiras'},
    {id:17, name: 'Troca de Embreagem'},
    {id:18, name: 'Outro, Especifique Na OBS'}
]
const users = []
const cars = [{
    idCar: 1,
    anoCarro: 2020, 
    combustivel: 'Gasolina',
    marcaCarro: 'Volkswagen',
    modeloCarro: 'Gol g6',
}]

app.get('/maintenance', (req,res)=>{
    res.json(manut)

})

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

