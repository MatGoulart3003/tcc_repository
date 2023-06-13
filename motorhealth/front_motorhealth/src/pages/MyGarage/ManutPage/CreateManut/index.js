import React, { useEffect, useState } from "react";
import {Container, Button, ButtonText, 
    Input, ViewKM, ViewDateKM, LabelText,ButtonDate, ViewDate, 
    ViewPicker, ViewObs, InputObs, ViewSave} from "../CreateManut/style";
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import Api from "../../../../Services/ApiCar";
import moment from 'moment'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import maintenanceServiceApi from "../../../../Services/MaintenanceApi";
import apiCar from "../../../../Services/ApiCar";

export default function CreateManut(){

    const [km, setKm] = useState(0)
    const [manutOptions, setManutOptions] = useState([])
    const [manutSelected, setManutSelected]= useState()
    const [manutDescriptionSelected, setManutDescriptionSelected] = useState('')
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [obs, setObs] = useState('')
    const [recommendedMaints, setRecommendedMaints] = useState ([]);    
    const [maintenancesForRecommend, setMaintenancesForRecommend] = useState ([]);
    const [codigoFipe, setCodigoFipe] = useState()
    const [isValid, setIsValid] = useState(false)
    const [isPressed, setIsPressed] = useState(false)
    const [selectedOption, setSelectedOption] = useState('');


    const navigation = useNavigation()

   

    const newMaintenanceRecommended = (value, index) =>{
        setSelectedOption(value);
        if(maintenancesForRecommend[index] != undefined) {
            console.log(maintenancesForRecommend[index].km)
            setKm(maintenancesForRecommend[index].km)
            setObs(maintenancesForRecommend[index].label)
            setManutDescriptionSelected(maintenancesForRecommend[index].description)
            manutOptions.forEach(element => {
               
                if(element.label == maintenancesForRecommend[index].description){
                    setManutSelected(element.value)
                }
            });
           
        }      
        
    }

    const pickerStyle = {
        inputAndroid: {
          color: 'A9A9A9',
        },
        itemSelectedTextStyle: {
          color: 'A9A9A9',
        },
      };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = () => {
        if (Platform.OS === 'android') {
        setShow(true);
        // for iOS, add a button that closes the picker
        }
        setMode("date");
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const getManuts = async () => {
        
        try{
            const response = await Api.get('/maintenance')
            
            const formattedData = response.data.map(item =>({
                label: item.name,
                value: item.id
            }))
            setManutOptions(formattedData)
        }catch(error){
            console.log(error)
        }
    };
    
    const getCodigoFipe = async () =>{
        let codigoStorage = await AsyncStorage.getItem('codigoFipeStorage')
        setCodigoFipe(codigoStorage)
    }
    const checkCodIsValid = () => {

        setIsPressed(true)
        console.log(recommendedMaints)
        recommendedMaints?.forEach(item => {
            const string = JSON.stringify(item.codigo_fipe)
           
            if(codigoFipe == string){
                console.log(codigoFipe)
                getRecommendedManutsByCar(item.id)
                setIsValid(true)
                setIsPressed(true)
            }
        });
    } 
        
    const saveManut = async () => {

        const formattedDate = moment(date).format('DD/MM/YYYY')
        const idCarStorage = await AsyncStorage.getItem('idCarStorage')

        let manut = {
            date: formattedDate,
            km: km,
            maintenance: manutSelected,
            descriptionMaintenance: manutDescriptionSelected,
            obs: obs,
            idCar: idCarStorage
        }

        console.log(manut)
        maintenanceServiceApi.createCar(manut)
        Alert.alert('Sucesso!', 'Manutenção salva com sucesso!')
        navigation.navigate('ManutPage')
    }

    const getRecommendedManuts = async () => {
        const result = await apiCar.get('/recommendedMaint')       
        setRecommendedMaints(result.data)
    }

    const getRecommendedManutsByCar = async (ID) => {
        try{
            const response = await apiCar.get(`/recommendedMaint/${ID}`)
            const formattedData = response.data.map(item => ({
                value: item.id,
                label: item.obs,                
                description: item.description_maintenance,
                idRecommended: item.id_recommended_maint,
                km: item.km
                
            }))
            setMaintenancesForRecommend(formattedData)
        }catch(error){
            console.log(error)
        }
   
    }

    useEffect(() => {
        getManuts();
        getCodigoFipe();
        getRecommendedManuts()

      }, []);

    useEffect(() =>{

    }, [])
    
    return (
        
        <Container>
            <ViewDateKM>
                <ViewDate>
                    <ButtonDate onPress={showDatepicker}>
                        <LabelText>Data: {date.toLocaleDateString()}</LabelText>
                    </ButtonDate>
                </ViewDate>
                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    locale='pt-BR'
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                    />
                )}
                <ViewKM>
                    <Input
                        placeholder= "Quilometragem, Ex: 20000" 
                        keyboardType='numeric'   
                        onChangeText={value => setKm(value)}
                        value={km}                                      
                    />

                </ViewKM>
            </ViewDateKM>
            <ViewPicker>
                <RNPickerSelect
                    placeholder={{label: 'Selecione uma Manutenção:', value: null }}
                    onValueChange={(value, index) => {
                        setManutSelected(value)
                        if (manutOptions[index-1] != undefined){
                            setManutDescriptionSelected(manutOptions[index-1].label) 
                        }                                    
                    }}                                  
                    items={manutOptions}
                    style={pickerStyle}
                    value={manutSelected}
                />
            </ViewPicker>
            <ViewObs>
                <InputObs
                    multiline
                    numberOfLines={6}
                    placeholder="Observações: (Opcional)"
                    onChangeText={value => setObs(value)}
                    value={obs}
                />
            </ViewObs>
            
            
            
            {!isPressed && (
                <>
                    <ViewSave>
                        <Button onPress={() => saveManut()} >
                            <ButtonText>Salvar</ButtonText>
                        </Button>
                    </ViewSave>
                        <ViewSave>
                        <Button onPress={checkCodIsValid}>
                            <ButtonText>Checar Manutenções</ButtonText>
                        </Button>
                    </ViewSave>
                </>
            )}

            {isPressed && (
                <>
                {isValid ? (
                    <>
                    <ViewPicker>
                    <RNPickerSelect
                        placeholder={{ label: 'Selecione:', value: null }}
                        onValueChange={(value, index) => {
                            newMaintenanceRecommended(value, index-1)                                                     
                        }}
                        items={maintenancesForRecommend}
                        style={{
                        inputAndroid: {
                            color: 'white',
                        },
                        }}
                    />  

                    </ViewPicker>

                    <ViewSave>
                        <Button onPress={() => saveManut()} >
                            <ButtonText>Salvar</ButtonText>
                        </Button>
                    </ViewSave>
                    </>
                                        
                ) : (
                    <>
                        <ViewSave>
                            <ButtonText>Manutenção recomendada não disponível no momento.</ButtonText>
                        </ViewSave>
                        
                        <ViewSave>
                            <Button onPress={() => saveManut()} >
                                <ButtonText>Salvar</ButtonText>
                            </Button>
                        </ViewSave>
                        
                    </>
                )}
                </>
            )}
        </Container>

        
    );
  };
