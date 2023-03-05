import React from "react";
import { View, Text, TextInput,  } from "react-native";
import { ButtonInput, Container, Title } from "./styles";

export default function Login() {
    return (
        <Container>
            
            <Title>Bem Vindo!!</Title>
            <Title>Usuário</Title>
            <ButtonInput placeholder="Nome do usuário" ></ButtonInput>
            <Title >Senha</Title>
            <ButtonInput placeholder="Senha do usuário" ></ButtonInput>

        </Container>
    );
}