import React, { useState } from "react";
import {  Input  } from "react-native-elements";

import { Button, ButtonText, Container, TextLogin, TextLogin2, Title } from "./styles";
import { Alert, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import userServiceApi from "../../Services/UserServiceApi";

export default function CreateUser() {

    const navigation = useNavigation();

    const [user, setUser] = useState(null)
    const [password, setPassword] =  useState(null)
    const [confirmPass, setConfirmPass] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const equalPassword = () => {
        if(user == null || user === ""){
            Alert.alert("Digite um nome de usuário!!")
        }else if (password == null || password === ""){
            Alert.alert("Digite uma senha")
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
            setLoading(true)
            let data = {
                username: user,
                password: password
            }

            userServiceApi.register(data)
            .then((response) =>{
                console.log(response.data)
                setLoading(false)
                Alert.alert('Usuário criado com sucesso!')
            })
            .catch((error)=>{
                console.log(error)
                setLoading(false)
            })
        }
        
    }

    const handlePress = () => {
        saveUser();
        navigation.navigate('Welcome');
      };
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
            {isLoading &&
              <Text>Carregando...</Text>
            }
            {!isLoading &&                
              <Button onPress={ () => handlePress()}>
              <ButtonText>Criar</ButtonText>
              </Button>
            }
        </Container>
    );
}