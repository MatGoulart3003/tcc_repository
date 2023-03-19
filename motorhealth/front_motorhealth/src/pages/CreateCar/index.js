import React,{useState, useEffect} from "react";
import { Text, View, FlatList } from "react-native";
import api from '../../Services/Api'
import Carro from "./Model";
import RNPickerSelect from 'react-native-picker-select';

export default function CreateCar() {  
    const [marcas, setMarcas] = useState([])
    const [modelos, setModelos] = useState([])
    const [anos, setAnos] = useState ([])
    let marca;
    let modelo;
    let ano;

    function getFromApi (url){
        api.get(url)
            .then(response => {
                const formattedData = response.data.map(item => ({
                    label: item.nome,
                    value: item.codigo
                }))
                if(url === '/marcas'){
                    setMarcas(formattedData);
                }else if (marca != null){
                    setModelos(formattedData)
                }
            
        })
        .catch(error => {
            console.error(error)
        })
    }

    useEffect(() => {
        if (marcas === null){
            getFromApi('/marcas')
        }else if (modelo === null){
            getFromApi(`${marca}/modelos`)
        }else if (ano === null){
            getFromApi(`${modelo}/anos`)
        }        
    }, [])

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
    
