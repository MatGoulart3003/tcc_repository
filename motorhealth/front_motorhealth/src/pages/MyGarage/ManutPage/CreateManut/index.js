import React, { useEffect, useState } from "react";
import {Container, Button, ButtonText, 
    Input, ViewKM, ViewDateKM, LabelText,ButtonDate, ViewDate, 
    ViewPicker, ViewObs, InputObs, ViewSave} from "../CreateManut/style";
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import Api from "../../../../Services/ApiCar";
import moment from 'moment'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import maintenanceServiceApi from "../../../../Services/MaintenanceApi";


export default function CreateManut(){

    const [km, setKm] = useState(0)
    const [manutOptions, setManutOptions] = useState([])
    const [manutSelected, setManutSelected]= useState()
    const [manutDescriptionSelected, setManutDescriptionSelected] = useState('')
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [obs, setObs] = useState('obs')

    const navigation = useNavigation()

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
            console.log(formattedData)
        }catch(error){
            console.log(error)
        }
    };
    
    useEffect(() => {
        getManuts();
      }, []);

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
                />
            </ViewPicker>
            <ViewObs>
                <InputObs
                    multiline
                    numberOfLines={6}
                    placeholder="Observações: (Opcional)"
                    onChangeText={value => setObs(value)}
                />
            </ViewObs>
            <ViewSave>
                <Button onPress={() => saveManut()} >
                    <ButtonText>Salvar</ButtonText>
                </Button>
            </ViewSave>
            <ViewSave>
                <Button onPress={() => navigation.navigate('RecommendedManut')} >
                    <ButtonText>Recomendação:</ButtonText>
                </Button>
            </ViewSave>
        </Container>
    );
  };
