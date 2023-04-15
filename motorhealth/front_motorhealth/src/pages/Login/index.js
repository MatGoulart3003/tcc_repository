import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {  Input  } from "react-native-elements";
import { Button, ButtonText, Container, Title, TextLogin } from "./styles";

export default function Login() {
    const navigation = useNavigation();

    const [username, setUsername] = useState(null)
    const [password, setPassword] =  useState(null)

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
            <Button onPress={ () => navigation.navigate('MyGarage')}>
                <ButtonText>Login</ButtonText>
            </Button>
        </Container>
    );
}