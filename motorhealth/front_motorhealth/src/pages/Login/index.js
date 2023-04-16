import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {  Input  } from "react-native-elements";
import { Button, ButtonText, Container, Title, TextLogin } from "./styles";
import { Alert } from "react-native";
import userServiceApi from "../../Services/UserServiceApi";

export default function Login() {
    const navigation = useNavigation();

    const [username, setUsername] = useState(null)
    const [password, setPassword] =  useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isAutenticated, setIsAltenticated] = useState(false)

    const autenticateUser = () => {
      

      if (isValidUser()){
        setIsAltenticated(false)
        let data = {
          username: username,
          password: password
        }

        userServiceApi.doLogin(data)
        .then((response) => {
          setIsAltenticated(true)
          setIsLoading(false)
          Alert.alert('Usuário autenticado com sucesso!')          
        })
        .catch((error)=>{
          console.log(error)
          setIsLoading(false)
          Alert.alert('Usuário/Senha incorretos!')
        })
      }
      return isAutenticated
    }

    const isValidUser = () => {
      if (username == null){
        Alert.alert("Digite um nome de usuário!!")
      }else if (password == null){
        Alert.alert("Digite uma senha!!")
      }else{
        return true
      }
    }

    const handlePress = () => {
      if (autenticateUser()){
        navigation.navigate('MyGarage');
      }
      
    };
    return (
        <Container>
            
            <Title>Bem Vindo!!</Title>
            <TextLogin>Usuário</TextLogin>
            <Input
              placeholder="Nome do usuário"
              leftIcon={{ type: 'font-awesome', name:'user'}}
              onChangeText={value => setUsername(value)}
              />           
            <TextLogin >Senha</TextLogin>
            <Input 
              placeholder="Senha do usuário"
              leftIcon={{type: 'font-awasome', name: 'lock'}}
              onChangeText={value => setPassword(value)}
              secureTextEntry={true}
            />
            <Button onPress={() => handlePress()}>
                <ButtonText>Login</ButtonText>
            </Button>
        </Container>
    );
}