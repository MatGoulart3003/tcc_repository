import React, { useState,useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Container, CarButton, ViewRefreshCar, ViewRegisterCar, LabelText, ContentContainer } from "./style";
import { ButtonText } from "../Login/styles";
import apiCar from "../../Services/ApiCar";
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
    
    const saveCarStorage = async (carId, modeloCarro, codigoFipe) => {
        console.log("ID carro",carId)
        let carIdString = JSON.stringify(carId);
        let modeloCarroString = JSON.stringify(modeloCarro)
        let codigoFipeString = JSON.stringify(codigoFipe)

        AsyncStorage.setItem("idCarStorage", carIdString)
        AsyncStorage.setItem("nameCarStorage", modeloCarroString)
        AsyncStorage.setItem("codigoFipeStorage", codigoFipeString)
        navigation.navigate('ManutPage')
    }

    useEffect(() => {         
        getCars();    
    }, []);

    searchUserStorage("idUserLoged");   
    return(
    <Container>
      <ContentContainer>
      
        {carList
        .filter((item) => item.userId == storage)
        .map((item) => (
            <CarButton key={item.id} onPress={() => saveCarStorage(item.id, item.modeloCarro, item.codigoFipe)}>
                <LabelText>Modelo: {item.modeloCarro}</LabelText>
                <LabelText>Marca: {item.marcaCarro}</LabelText> 
                <LabelText>Ano: {item.anoCarro}</LabelText> 
            </CarButton>
))}
      </ContentContainer>
      <ContentContainer>
        <ViewRegisterCar>
          <Button onPress={() => navigation.navigate('CreateCar')}>
            <ButtonText>Cadastrar Carro</ButtonText>
          </Button>
        </ViewRegisterCar>

        <ViewRefreshCar>
          <Button>
            <ButtonText onPress={() => getCars()}>Recarregar Carros</ButtonText>
          </Button>
        </ViewRefreshCar>
       
      </ContentContainer>
    </Container>

    );

}