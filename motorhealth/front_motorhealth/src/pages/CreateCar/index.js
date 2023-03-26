import React,{useState, useEffect} from "react";
import { Text, View, FlatList } from "react-native";
import api from '../../Services/Api'
import RNPickerSelect from 'react-native-picker-select';

export default function CreateCar() {  
    const [marcas, setMarcas] = useState([])
    const [modelos, setModelos] = useState([])
    const [anos, setAnos] = useState ([])
    const [marcaSelecionada, setMarcaSelecionada] =useState([]);
    const [modeloSelecionado, setModeloSelecionado]=useState([]);
    const [anoSelecionado, setAnoSelecionado]=useState([]);

    function getMarcas (){
        useEffect(() => {
           
            api.get('/marcas')
              .then(response => {
                
                const formattedData = response.data.map(item => ({
                  label: item.nome,
                  value: item.codigo
                }));
                setMarcas(formattedData);
               
              })
              .catch(error => {
                console.error(error);
              });
          }, []);
    }
    
    function getModelos (idMarca){
        useEffect(() => {
            api.get(`/marcas/${59}/modelos`)
              .then(response => {
                const formattedData = response.data.modelos.map(item => ({
                  label: item.nome,
                  value: item.codigo
                }));
        
                setModelos(formattedData);
              })
              .catch(error => {
                console.error(error);
              });
          }, []);
          
    }  
    
    function getAnos (idMarca, idAno){
        useEffect(() => {
           
            api.get(`/marcas/${59}/modelos/${2394}/anos`)
              .then(response => {
                
                const formattedData = response.data.map(item => ({
                  label: item.nome,
                  value: item.codigo
                }));
                setAnos(formattedData);
               
              })
              .catch(error => {
                console.error(error);
              });
          }, []);
    }
    getMarcas();
    getModelos();
    getAnos();   

        return(
        <View>
            <Text>Selecione a marca do carro:</Text>
            <RNPickerSelect
                items={marcas}
                placeholder={{label: 'Selecione a Marca:', value: null}}
                onValueChange={(value)=>{
                    setMarcaSelecionada(value);
                 //   getModelos(marca);
                }}
            />
            <Text>Selecione o Modelo</Text>
            <RNPickerSelect
                items={modelos}
                placeholder={{label: 'Selecione o Modelo:', value: null}}
                onValueChange={(value)=>{
                    setModeloSelecionado(value)
                  //  getAnos(marca, modelo);
                }}
            />
            <Text>Selecione o Ano</Text>
            <RNPickerSelect
                items={anos}
                placeholder={{label: 'Selecione o Ano:', value: null}}
                onValueChange={(value)=>{
                    setAnoSelecionado(value)
                }}
            />
        </View>
    );
}
    
