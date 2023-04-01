import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { Button } from "./styles";

import api from '../../Services/Api';
import RNPickerSelect from 'react-native-picker-select';

export default function CreateCar() {
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');
    const [options1, setOptions] = useState([])
    const [options2, setOptions2] = useState([]);
    const [options3, setOptions3] = useState([]);
    const [carSelected, setCarSelected]= useState(null)
    const [car, setCar] =  useState(null)

    const createCarObj = (marca, modelo, ano, comb, codigoFipe, valor)=>{
        return {
            marca: marca,
            modelo: modelo,
            ano: ano,
            comb: comb,
            codigoFipe: codigoFipe,
            valorMercado: valor
        } 
    }

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
    
    const fetchVeic = async () => {
        if (selectedOption1 && selectedOption2 && selectedOption3) {
          try {
            const response = await api.get(`/marcas/${selectedOption1}/modelos/${selectedOption2}/anos/${selectedOption3}`);
            const formattedData = response.data.map(item => ({
              marca: item.Modelo,
              modelo: item.CodigoFipe,
              ano: item.AnoModelo,
              comb: item.Combustivel,
              codigoFipe: item.CodigoFipe,
              valorMercado: item.Valor

            }));
            console.log(formattedData)
            setCarSelected(formattedData)
          } catch (error) {
            console.log(error);
          }
        }
      };

      const handleCreateCar = () => {
        if (carSelected && carSelected.length > 0) {
          const car = createCarObj(
            carSelected[0].marca,
            carSelected[0].modelo,
            carSelected[0].ano,
            carSelected[0].comb,
            carSelected[0].codigoFipe,
            carSelected[0].valorMercado
          );
          setCar(car);
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
    
    useEffect(() => {
        fetchVeic();
      }, [selectedOption1, selectedOption2, selectedOption3]);
    
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
    
        <Button title="Criar Carro" onPress={handleCreateCar} />
            {car && (
                <Text>
                Marca: {car.marca}, Modelo: {car.modelo}, Ano: {car.ano}
                </Text>
        )}
    
      </View>
    );
}    

