import React,{useState, useEffect} from "react";
import { Text, View, FlatList } from "react-native";
import api from '../../Services/Api'
import RNPickerSelect from 'react-native-picker-select';

export default function CreateCar() {  
    const [marcas, setMarcas] = useState([])
    const [modelos, setModelos] = useState([])
    const [anos, setAnos] = useState ([])
    let marca;
    let modelo;
    let ano;


    useEffect(() => {
        // Faz uma requisição à API para recuperar os dados
        api.get('/marcas')
          .then(response => {
            // Formata os dados para o formato esperado pelo PickerSelect
            const formattedData = response.data.map(item => ({
              label: item.nome,
              value: item.codigo
            }));
    
            // Define os dados no estado
            setMarcas(formattedData);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
      
    
      
        return(
        <View>
            <Text>Selecione a marca do carro:</Text>
            <RNPickerSelect
                items={marcas}
                placeholder={{label: 'Selecione a Marca:', value: null}}
                onValueChange={(value)=>{
                    marca = value
                }}
            />
            <Text>Selecione o Modelo</Text>
            <RNPickerSelect
                items={modelos}
                placeholder={{label: 'Selecione o Modelo:', value: null}}
                onValueChange={(value)=>{
                    modelo = value
                }}
            />
            <Text>Selecione o Ano</Text>
            <RNPickerSelect
                items={anos}
                placeholder={{label: 'Selecione o Ano:', value: null}}
                onValueChange={(value)=>{
                    ano = value
                }}
            />
        </View>
    );
}
    
