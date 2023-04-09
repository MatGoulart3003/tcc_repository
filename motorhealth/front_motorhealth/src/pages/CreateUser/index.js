import React, { useState } from "react";
import {  Input  } from "react-native-elements";

import { Button, ButtonText, Container, TextLogin, TextLogin2, Title } from "./styles";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import userService from "../../Services/UserService";

export default function CreateUser() {

    const navigation = useNavigation();

    const [user, setUser] = useState(null)
    const [password, setPassword] =  useState(null)
    const [confirmPass, setConfirmPass] = useState(null)

    const equalPassword = () => {
        if(user === null){
            Alert.alert("Digite um nome de usuário!!")
        }else if (confirmPass ===  null){
            Alert.alert("Confirme sua senha")
        }else if (password != confirmPass){
            Alert.alert("As senhas tem que ser iguais!!")
        }else{
            return true
        }
    }

    const saveUser = () => {
        if (equalPassword()){
            let data = {
                user: user,
                password: password
            }
            
            userService.register(data)
            .then((response) =>{
                console.log(response)
            })
            .catch((error)=>{
                console.log('erro')
            })
        }
        
    }


    return (
        <Container>
            
            <Title>Cadastre-se</Title>
            <TextLogin2>Digite suas credenciais:</TextLogin2>
            
            <TextLogin>Usuário</TextLogin>
            <Input
              placeholder="Nome do usuário"
              leftIcon={{ type: 'font-awesome', name:'user'}}
              onChangeText={value => setUser(value)}
              />           
            <TextLogin >Senha</TextLogin>
            <Input 
              placeholder="Senha do usuário"
              leftIcon={{type: 'font-awasome', name: 'lock'}}
              onChangeText={value => setPassword(value)}
              secureTextEntry={true}
            />
            <Input 
              placeholder="Confirme sua senha"
              leftIcon={{type: 'font-awasome', name: 'lock'}}
              onChangeText={value => setConfirmPass(value)}
              secureTextEntry={true}
            />
            <Button onPress={ () => saveUser()}>
                <ButtonText>Criar</ButtonText>
            </Button>
        </Container>
    );
}