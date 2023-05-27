const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');

const prisma =  new PrismaClient()

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


app.get('/maintenance', (req,res)=>{
    res.json(manut)

})

app.get('/users', async (req,res)=>{
    const users = await prisma.user.findMany()
    res.json(users)
})

app.get('/users/:name',async (req,res)=>{
    const name = req.params.name;
    console.log(name) 
    const user = await prisma.user.findFirst({
        where:{
            username: name
        }
    })
    res.json(user)
})


app.get('/usersCars', async (req,res)=>{
    const cars = await prisma.car.findMany()
    res.json(cars)
})

app.get('/maintenances/database', async (req,res)=>{
    const maintenances = await prisma.maintenance.findMany()
    res.json(maintenances)
})

app.post ('/users', async (req,res)=>{
    try{
        const hasedPassword = await bcrypt.hash(req.body.password, 10)
        const prismaUser = await prisma.user.create({
            data:{
                username: req.body.username,
                password: hasedPassword
            }
        })
        console.log(prismaUser)
        res.status(201).send()
    }catch{
        res.status(500).send()
    }
})

app.post ('/users/login', async (req,res)=>{
    const prismaUser = await prisma.user.findUnique({
        where:{
            username: req.body.username,
        },
    })
    console.log(prismaUser)
    if(prismaUser == null){
        return res.status(400).send('Usuário nulo')
        
    }

    try{
        if (await bcrypt.compare(req.body.password, prismaUser.password)){
            res.send('Logado')
            
        }else{
            res.status(403).send('Usário/senha incorretos')
        }
    }catch{
        res.status(500).send();
    }
})

app.post ('/usersCars/create', async (req,res) =>{
    const {anoCarro,combustivel,marcaCarro,modeloCarro,userId, codigoFipe} = req.body
    try{
        let userIdNumber = parseInt(userId);
        const prismaCar = prisma.car.create({
            data: {
              anoCarro: anoCarro,
              combustivel: combustivel,
              marcaCarro: marcaCarro,
              modeloCarro: modeloCarro,
              userId:userIdNumber,
              codigoFipe: codigoFipe
            }
          })
          .then((createdCar) => {
            console.log("Carro criado com sucesso: ", createdCar);
          })
          .catch((error) => {
            console.log("Erro ao criar carro: ", error);
          });
              
        res.status(201).send("Carro criado com sucesso")
    }catch{
        res.status(500).send("carro zuado")
    }
})

app.post('/maintenance/create', async (req, res)=> {
    const {date,descriptionMaintenance,idCar,km,maintenance, obs} = req.body
    try{
        let idCarNumber = parseInt(idCar);
        let dateString = JSON.stringify(date)
        const prismaMaintenance = prisma.maintenance.create({
            data: {
                date: dateString,
                descriptionMaintenance: descriptionMaintenance,
                idCar: idCarNumber,
                km:km,
                maintenance: maintenance,
                obs: obs
            }
        })
        .then((createdMaintenance)=> {
            console.log("Manutenção criada com sucesso: ", createdMaintenance);
        })
        .catch((error) => {
            console.log("Erro ao criar Manutenção: ", error);
        });
        res.status(201).send("Manutenção criada com sucesso")


    }catch(error){
        res.status(500).send("erro")
    }
})

app.listen(3000);

