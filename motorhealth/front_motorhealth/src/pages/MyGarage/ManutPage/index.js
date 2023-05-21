import React, { useState, useEffect } from "react";
import { Button, Container, Title, ButtonText, ViewRefreshCar, DescriptionText } from "../ManutPage/style";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import apiCar from "../../../Services/ApiCar";

export default function ManutPage(){

    const navigation = useNavigation();
    const [nameVeic, setNameVeic] = useState('')
    const [listManut, setListManut] = useState([])
    const [storage, setStorage] = useState('')

    const printNameVeic = async () =>{
        let nameStorage = await AsyncStorage.getItem('nameCarStorage')
        setNameVeic(nameStorage)
    }

    const getManutCars = async () => {
        const result = await apiCar.get('/maintenances/database')
        setListManut(result.data)
    }

    const searchCarStorage = async (key) =>{
        const value = await AsyncStorage.getItem(key)
        console.log(value)
        setStorage(value)
    };  

    useEffect(() => { 
        getManutCars()   
        printNameVeic();
    }, []);
    
    searchCarStorage('idCarStorage')
    return(
        <Container>
            <Title>Manutenções do {nameVeic} </Title>
            {listManut
            .filter((item) => item.idCar == storage)
            .map((item) => (
            
            <DescriptionText key={item.id} > {item.descriptionMaintenance} com {item.km} quilometros </DescriptionText>

            ))}
             <Button onPress={() => navigation.navigate('CreateManut')} >
                <ButtonText>Nova Manutenção</ButtonText>
            </Button>

            <ViewRefreshCar>
              <Button>
                <ButtonText onPress={() => getManutCars()}>Recarregar Manutenções</ButtonText>
              </Button>
            </ViewRefreshCar>
        </Container>
    );
}