import React from "react";

import { Button, ButtonText, Container, Input, TextLogin, TextLogin2, Title } from "./styles";

export default function CreateUser() {
    return (
        <Container>
            
            <Title>Criando usuário</Title>
            <TextLogin2>Digite suas credenciais:</TextLogin2>
            
            <TextLogin>Usuário</TextLogin>
            <Input  placeholder="Nome do usuário" ></Input >
            <TextLogin >Senha</TextLogin>
            <Input  placeholder="Senha do usuário" ></Input >
            <Button>
                <ButtonText>Criar</ButtonText>
            </Button>
        </Container>
    );
}