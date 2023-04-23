import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Container, Title, CarButton } from "./style";
import { ButtonText } from "../Login/styles";
import apiCar from "../../Services/ApiCar";
import { Text, FlatList } from "react-native";

export default function MyGarage(){   

    const navigation = useNavigation();

    const [carList, setCarList] = useState([])

    const getCars = async () => {
        const result = await apiCar.get('/usersCars')
        setCarList(result.data)
        
    };
 

   getCars()
    return(
    <Container>
      
        <Title>Minha garagem</Title>
        {carList.map((item)=>(
            
            <CarButton onPress={() => navigation.navigate('ManutPage')}>
              <ButtonText key={item.idCar} > {item.modeloCarro}</ButtonText> 
            </CarButton>
        ))}
        <Button onPress={() => navigation.navigate('CreateCar')}>
            <ButtonText>Cadastrar Carro</ButtonText>
        </Button>
      
    </Container>

    );

}