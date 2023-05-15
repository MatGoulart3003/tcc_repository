import React, { useState } from "react";
import { Button, Container, Title, ButtonText } from "../ManutPage/style";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ManutPage(){
    const navigation = useNavigation();

    return(
        <Container>
            <Title>Manutenções do veiculo Tal</Title>
            <Button onPress={() => navigation.navigate('CreateManut')} >
                <ButtonText>Nova Manutenção</ButtonText>
            </Button>
        </Container>
    );
}