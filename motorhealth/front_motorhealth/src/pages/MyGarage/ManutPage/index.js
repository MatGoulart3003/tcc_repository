import React, { useState, useEffect } from "react";
import { Button, Container, Title, ButtonText } from "../ManutPage/style";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";

export default function ManutPage(){
    const navigation = useNavigation();
    const [nameVeic, setNameVeic] = useState('')
    const [listManut, setListManut] = useState([])

    const printNameVeic = async () =>{
        let nameStorage = await AsyncStorage.getItem('nameCarStorage')
        setNameVeic(nameStorage)
    }

    const listCar = () => {
        
    }

    useEffect(() => {         
        printNameVeic();
    }, []);
   
    return(
        <Container>
            <Title>Manutenções do {nameVeic} </Title>
            <Button onPress={() => navigation.navigate('CreateManut')} >
                <ButtonText>Nova Manutenção</ButtonText>
            </Button>
            <View>
                <Button></Button>
            </View>
        </Container>
    );
}