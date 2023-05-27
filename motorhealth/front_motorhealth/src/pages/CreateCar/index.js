import React, { useState, useEffect } from "react";
import { Alert, View } from "react-native";
import { ButtonText, Container, Button, ViewOptions, ViewPicker, OptionSelectedText, ViewCarSelected, ViewButton } from "./styles";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import api from '../../Services/Api';
import carServiceApi from '../../Services/CarsServiceApi'
import RNPickerSelect from 'react-native-picker-select';

export default function CreateCar() {
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');
    const [options1, setOptions] = useState([])
    const [options2, setOptions2] = useState([]);
    const [options3, setOptions3] = useState([]);
    const [carDetails, setCarDetails] = useState(null);
    const [storage, setStorage] =  useState('')

    const navigation = useNavigation()

    const searchUserStorage = async (key) =>{
        const value = await AsyncStorage.getItem(key)
        console.log(value)
        setStorage(value)
    }; 

    const fetchMarcas = async () => {
      try {
        const response = await api.get('/marcas');
        const formattedData = response.data.map(item => ({
          label: item.nome,
          value: item.codigo
        }));
        setOptions(formattedData);
        console.log(formattedData)
        setCarDetails(null)
      } catch (error) {
        console.error(error);
      }
    };
    
    const fetchModelos = async () => {
      if (selectedOption1) {
        try {
          const response = await api.get(`/marcas/${selectedOption1}/modelos`);
          const formattedData = response.data.modelos.map(item => ({
            label: item.nome,
            value: item.codigo
          }));
          setOptions2(formattedData);
          setSelectedOption2('');
          setOptions3([]);
          setSelectedOption3('');
        } catch (error) {
          console.log(error);
        }
      }
    };
    
    const fetchAnos = async () => {
      if (selectedOption2) {
        try {
          const response = await api.get(`/marcas/${selectedOption1}/modelos/${selectedOption2}/anos`);
          const formattedData = response.data.map(item => ({
            label: item.nome,
            value: item.codigo
          }));
          setOptions3(formattedData);
          
        } catch (error) {
          console.log(error);
        }
      }
    };
    
    const fetchCarDetails = async (marca, modelo, ano) => {
        try {
          const response = await api.get(`/marcas/${marca}/modelos/${modelo}/anos/${ano}`);
          const formattedData = {
            marcaCarro: response.data.Marca,
            modeloCarro: response.data.Modelo,
            anoCarro: response.data.AnoModelo,
            combustivel: response.data.Combustivel,
            codigoFipe: response.data.CodigoFipe,
            userId: storage
          };
          return formattedData;
        } catch (error) {
          console.log(error);
          return null;
        }
      }
      
    const handleSelectedOptions = async () => {
        if (selectedOption1 && selectedOption2 && selectedOption3) {
          const carData = await fetchCarDetails(selectedOption1, selectedOption2, selectedOption3);
          setCarDetails(carData);
          console.log(selectedOption1, selectedOption2, selectedOption3)
          console.log(carData)
        }
    }
    
    searchUserStorage("idUserLoged");   
    useEffect(() => {
      fetchMarcas();
    }, []);
    
    useEffect(() => {
      fetchModelos();
    }, [selectedOption1]);
    
    useEffect(() => {
      fetchAnos();
    }, [selectedOption2]);

    useEffect(() => {
        handleSelectedOptions();
      }, [selectedOption1, selectedOption2, selectedOption3]);
    
    const saveCar = (carDetails) => {
      carServiceApi.createCar(carDetails)
      Alert.alert('Sucesso!', 'Carro salvo com sucesso!')
      navigation.navigate('MyGarage')
    }
    
    return (
      <Container>

        <ViewOptions>
          <ButtonText>Selecione a marca do carro:</ButtonText>
          <ViewPicker> 
            <RNPickerSelect
              style={{
                inputAndroid: {                    
                  color: 'white'                   
                }
              }}
              items={options1}
              placeholder={{ label: 'Selecione a Marca:', value: null }}
              onValueChange={(value) => {
                setSelectedOption1(value);
              }}
              
            />
            </ViewPicker>
          </ViewOptions>
          
          <ViewOptions>
            <ButtonText>Selecione o Modelo</ButtonText>
            <ViewPicker>  
              <RNPickerSelect
                placeholder={{label: 'Selecione o Modelo:', value: null }}  
                onValueChange={value => setSelectedOption2(value)}
                items={options2}
                disabled={!selectedOption1}
                style={{
                  inputAndroid: {                    
                    color: 'white'                   
                  }
                }}
              />
            </ViewPicker>
          </ViewOptions>
          
          <ViewOptions>
            <ButtonText>Selecione o Ano e Combustivel</ButtonText>
            <ViewPicker>
            <RNPickerSelect
              placeholder={{label: 'Selecione o Ano e Combustivel:'}}  
              onValueChange={value => setSelectedOption3(value)}
              items={options3}
              disabled={!selectedOption2}
              style={{
                inputAndroid: {                    
                  color: 'white'                   
                }
              }}
            />
            </ViewPicker>
          </ViewOptions>


        {carDetails ? (
            <ViewCarSelected>
                <OptionSelectedText>Marca: {carDetails.marcaCarro}</OptionSelectedText>
                <OptionSelectedText>Modelo: {carDetails.modeloCarro}</OptionSelectedText>
                <OptionSelectedText>Ano: {carDetails.anoCarro}</OptionSelectedText>
                <OptionSelectedText>Combustivel: {carDetails.combustivel}</OptionSelectedText>
                <OptionSelectedText>ID usuário: {carDetails.userId}</OptionSelectedText>
                <OptionSelectedText>Codigo Fipe: {carDetails.codigoFipe}</OptionSelectedText>

                  <Button onPress={() => saveCar(carDetails)}>
                    <ButtonText>Salvar</ButtonText>
                  </Button>
                

            </ViewCarSelected>            
            
            ) : (
                 <OptionSelectedText>Preencha os dados acima</OptionSelectedText>
        )}
              
      </Container>
    );
}    

