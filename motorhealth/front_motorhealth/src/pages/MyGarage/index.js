import React, { useState,useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Container, Title, CarButton } from "./style";
import { ButtonText } from "../Login/styles";
import apiCar from "../../Services/ApiCar";
import { Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MyGarage(){   

    const navigation = useNavigation();
    
    const [valueStorage, setValueStorage] = useState("")
    const [keyStorage, setKeyStorage] = useState("")
    const [carList, setCarList] = useState([])

    const setKeyUserStorage = async () => {
        const value = await AsyncStorage.getAllKeys()
        const string = JSON.stringify(value[0])
        console.log(string)
        setKeyStorage(string)
    };

    const getCars = async () => {
        const result = await apiCar.get('/usersCars')
        setCarList(result.data)
    };

    const searchUserStorage = async (key) =>{
        const value = await AsyncStorage.getItem(key)
        console.log(value)
        setValueStorage(value)
    };

    useEffect(() => {       
        getCars();       
        setKeyUserStorage();      
    }, []);
   
    useEffect(()=>{           
        searchUserStorage(keyStorage);  
    },[])

    return(
    <Container>
      
        <Title>Minha garagem</Title>
        
        {carList
        .filter((item) => item.userId == valueStorage)
        .map((item) => (
            <CarButton key={item.id} onPress={() => navigation.navigate('ManutPage')}>
                <ButtonText>{item.modeloCarro}</ButtonText> 
            </CarButton>
))}

        <Button onPress={() => navigation.navigate('CreateCar')}>
            <ButtonText>Cadastrar Carro</ButtonText>
        </Button>
       
      
    </Container>

    );

}