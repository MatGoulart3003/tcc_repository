import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TextInput,  } from "react-native";
import { Button, ButtonText, Container, Input, Title, TextLogin } from "./styles";

export default function Login() {
    const navigation = useNavigation();

    return (
        <Container>
            
            <Title>Bem Vindo!!</Title>
            <TextLogin>Usuário</TextLogin>
            <Input  placeholder="Nome do usuário" ></Input >
            <TextLogin >Senha</TextLogin>
            <Input  placeholder="Senha do usuário" ></Input >
            <Button onPress={ () => navigation.navigate('MyGarage')}>
                <ButtonText>Login</ButtonText>
            </Button>
        </Container>
    );
}