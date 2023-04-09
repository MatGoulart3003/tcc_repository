import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Container, Title } from "./style";
import { Text } from "react-native";


export default function MyGarage(){
    
    const navigation = useNavigation();

    return(

    <Container>

        <Text>Minha garagem</Text>
        <Button
        onPress={ () => navigation.navigate('CreateCar')}>
            <Text>Cadastrar Carro</Text>
        </Button>

    </Container>

    );

}