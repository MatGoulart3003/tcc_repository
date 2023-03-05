import React from "react";
import { View, Text, TextInput,  } from "react-native";
import { Button, ButtonText, Container, Input, Title, TextLogin } from "./styles";

export default function Login() {
    return (
        <Container>
            
            <Title>Bem Vindo!!</Title>
            <TextLogin>Usuário</TextLogin>
            <Input  placeholder="Nome do usuário" ></Input >
            <TextLogin >Senha</TextLogin>
            <Input  placeholder="Senha do usuário" ></Input >
            <Button>
                <ButtonText>Login</ButtonText>
            </Button>
        </Container>
    );
}