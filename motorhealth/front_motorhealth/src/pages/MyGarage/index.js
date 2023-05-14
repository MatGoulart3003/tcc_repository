import React, { useState,useEffect, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Container, Title, CarButton, ViewRefreshCar, ViewRegisterCar } from "./style";
import { ButtonText } from "../Login/styles";
import apiCar from "../../Services/ApiCar";
import { Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MyGarage(){   

    const navigation = useNavigation();
    
    const [storage, setStorage] = useState("")
    const [carList, setCarList] = useState([])

    const getCars = async () => {
        const result = await apiCar.get('/usersCars')
        setCarList(result.data)
    };

    const searchUserStorage = async (key) =>{
        const value = await AsyncStorage.getItem(key)
        console.log(value)
        setStorage(value)
    };    
    
    useEffect(() => {         
        getCars();    
    }, []);

    searchUserStorage("idUserLoged");   
    return(
    <Container>
      
        {carList
        .filter((item) => item.userId == storage)
        .map((item) => (
            <CarButton key={item.id} onPress={() => navigation.navigate('ManutPage')}>
                <ButtonText>{item.modeloCarro}</ButtonText> 
            </CarButton>
))}

        <ViewRegisterCar>
          <Button onPress={() => navigation.navigate('CreateCar')}>
            <ButtonText>Cadastrar Carro</ButtonText>
          </Button>
        </ViewRegisterCar>

        <ViewRefreshCar>
          <Button >
            <ButtonText onPress={() => getCars()}>Recarregar Carros</ButtonText>
          </Button>
        </ViewRefreshCar>
       
      
    </Container>

    );

}