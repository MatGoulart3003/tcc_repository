import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import api from '../../Services/Api'
import RNPickerSelect from 'react-native-picker-select';

export default function CreateCar() {
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');
    const [options1, setOptions] = useState([])
    const [options2, setOptions2] = useState([]);
    const [options3, setOptions3] = useState([]);
    
    const fetchMarcas = async () => {
      try {
        const response = await api.get('/marcas');
        const formattedData = response.data.map(item => ({
          label: item.nome,
          value: item.codigo
        }));
        setOptions(formattedData);
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
          setSelectedOption3('');
        } catch (error) {
          console.log(error);
        }
      }
    };
    
    useEffect(() => {
      fetchMarcas();
    }, []);
    
    useEffect(() => {
      fetchModelos();
    }, [selectedOption1]);
    
    useEffect(() => {
      fetchAnos();
    }, [selectedOption2]);
    
    return (
      <View>
        <Text>Selecione a marca do carro:</Text>
        <RNPickerSelect
          items={options1}
          placeholder={{ label: 'Selecione a Marca:', value: null }}
          onValueChange={(value) => {
            setSelectedOption1(value);
          }}
        />
        <Text>Selecione o Modelo</Text>
        <RNPickerSelect
          onValueChange={value => setSelectedOption2(value)}
          items={options2}
          disabled={!selectedOption1}
        />
        <Text>Selecione o Ano</Text>
        <RNPickerSelect
          onValueChange={value => setSelectedOption3(value)}
          items={options3}
          disabled={!selectedOption2}
        />
    
        <Text>{`Selected options: ${selectedOption1}, ${selectedOption2}, ${selectedOption3}`}</Text>
    
      </View>
    );
}    

