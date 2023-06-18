import React, { useState, useEffect } from "react";
import { Button, Container, Title, ButtonText, ViewRefreshCar, DescriptionText, ViewManutCar, ContentContainer } from "../ManutPage/style";
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
            
            <ContentContainer>
                <Title>Carro: {nameVeic} </Title>
                
                    {listManut
                    .filter((item) => item.idCar == storage)
                    .map((item) => (
                        <ViewManutCar key={item.id} >
                            <DescriptionText>Descrição: {item.descriptionMaintenance}</DescriptionText>
                            <DescriptionText>Quilometragem: {item.km} </DescriptionText>
                            <DescriptionText>Data Prevista: {item.date} </DescriptionText>
                            <DescriptionText>Obs: {item.obs} </DescriptionText>
                        </ViewManutCar>
                    ))}
             </ContentContainer>   
             
             <ContentContainer>

                <ViewRefreshCar>
                    <Button onPress={() => navigation.navigate('CreateManut')} >
                        <ButtonText>Nova Manutenção</ButtonText>
                    </Button>
                </ViewRefreshCar>

                <ViewRefreshCar>
                    <Button>
                        <ButtonText onPress={() => getManutCars()}>Recarregar Manutenções</ButtonText>
                    </Button>
                </ViewRefreshCar>

            </ContentContainer>

        </Container>
    );
}