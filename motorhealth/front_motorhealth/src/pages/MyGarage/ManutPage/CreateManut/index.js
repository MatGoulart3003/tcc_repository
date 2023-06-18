import React, { useEffect, useState } from "react";
import {Container, Button, ButtonText, 
    Input, ViewKM, ViewDateKM, LabelText,ButtonDate, ViewDate, 
    ViewPicker, ViewObs, InputObs, ViewSave, ContentContainer} from "../CreateManut/style";
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import Api from "../../../../Services/ApiCar";
import moment from 'moment'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import maintenanceServiceApi from "../../../../Services/MaintenanceApi";
import apiCar from "../../../../Services/ApiCar";
import * as Notifications from 'expo-notifications';


export default function CreateManut(){

    const [km, setKm] = useState('')
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

    const handleCallNotifications = async (dateMaintenance) => {
        const {status} = await Notifications.getPermissionsAsync();

        if (status !== 'granted'){
            console.log("voce nao deixou as notificações ativas")

            return;
        }        
        const newDate = new Date(dateMaintenance)
        const currentDate = new Date()
        
        var anoStr = String(newDate.getFullYear());
        var mesStr = String(newDate.getMonth() + 1).padStart(2, '0');
        var diaStr = String(newDate.getDate()).padStart(2, '0');
        var horaStr = String(currentDate.getHours()).padStart(2, '0')
        var minutoStr = String(currentDate.getMinutes()).padStart(2, '0')
        var segundoStr = String(currentDate.getSeconds()).padStart(2, '0')

        var dataStr = anoStr + "-" + mesStr + "-" + diaStr;
        var dataHoraStr = dataStr + " " + horaStr + ":" + minutoStr + ":" + segundoStr;

        var data = new Date(dataStr);
        var dataHora = new Date(dataHoraStr);

        const trigger = dataHora.setSeconds(dataHora.getSeconds() + 3)
        console.log(trigger)      
          
        await Notifications.scheduleNotificationAsync({
            content:{
                title: 'Manutenção agendada para hoje!',
                body: `${manutDescriptionSelected} com ${km} Km!!`,
            },
            trigger: trigger
        })
    }
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
        handleCallNotifications(date)
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
            <ContentContainer>
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
        </ContentContainer>    
            
            
            {!isPressed && (

                <>
                <ContentContainer>
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
                </ContentContainer>
                </>
            )}

            {isPressed && (
                <>
                {isValid ? (
                    <>
                    <ContentContainer>
                        <ViewPicker>
                            <RNPickerSelect
                                placeholder={{ label: 'Selecione:', value: null }}
                                onValueChange={(value, index) => {
                                    newMaintenanceRecommended(value, index-1)                                                     
                                }}
                                items={maintenancesForRecommend}
                                style={{
                                inputAndroid: {
                                    color: '#FFF',
                                },
                                }}
                            />  

                        </ViewPicker>
                            <ViewSave>
                                <Button onPress={() => saveManut()} >
                                    <ButtonText>Salvar</ButtonText>
                                </Button>
                            </ViewSave>
                    </ContentContainer>
                    </>
                                        
                ) : (
                    <>
                        <ContentContainer>
                            <ViewSave>
                                <LabelText>Manutenção recomendada não disponível no momento.</LabelText>
                              
                            </ViewSave>
                                                    
                            <ViewSave>
                                <Button onPress={() => saveManut()} >
                                    <ButtonText>Salvar</ButtonText>
                                </Button>
                            </ViewSave>
                        </ContentContainer>
                        
                    </>
                )}
                </>
            )}
        </Container>

        
    );
  };
