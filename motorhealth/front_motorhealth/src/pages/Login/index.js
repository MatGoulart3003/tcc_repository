import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Api from "../../Services/ApiCar"
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Button, ButtonText, Container, Title, TextLogin, Input } from "./styles";
import { Alert } from "react-native";
import userServiceApi from "../../Services/UserServiceApi";

export default function Login() {
    const navigation = useNavigation();

    const [username, setUsername] = useState(null)
    const [password, setPassword] =  useState(null)
    const [isLoading, setIsLoading] = useState(false)
    
    const autenticateUser = () => {
      

      if (isValidUser()){
        let data = {
          username: username,
          password: password
        }

        userServiceApi.doLogin(data)
        .then((response) => {         
          setIsLoading(false)
          Alert.alert('Sucesso!', 'Usuário autenticado com sucesso!')
          saveUserStorage(data.username)
          navigation.navigate('MyGarage');         
        })
        .catch((error)=>{
          console.log(error)
          setIsLoading(false)
          Alert.alert('Erro!!','Usuário/Senha incorretos!')
        })
      }
       
    }

    const saveUserStorage = async (nameUser) => {
      try{
        const response = await Api.get(`/users/${nameUser}`)
        const myUser = response.data
        const id = JSON.stringify(myUser.id)
        const username = myUser.username        
        AsyncStorage.clear()
        AsyncStorage.setItem(username, id)

      }catch(error){
        console.log(error)
      }
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
            <Button onPress={() => autenticateUser()}>
                <ButtonText>Login</ButtonText>
            </Button>
        </Container>
    );
}