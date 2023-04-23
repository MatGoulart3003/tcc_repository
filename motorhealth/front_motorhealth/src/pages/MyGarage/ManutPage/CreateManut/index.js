import React, { useEffect, useState } from "react";
import {Container, Button, ButtonText, 
    Input, ViewKM, ViewDateKM, LabelText,ButtonDate, ViewDate, 
    ViewPicker, ViewObs, InputObs, ViewSave} from "../CreateManut/style";
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import Api from "../../../../Services/ApiCar";

export default function CreateManut(){

    const [km, setKm] = useState(0)
    const [manutOptions, setManutOptions] = useState([])
    const [manutSelected, setManutSelected]= useState()
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [obs, setObs] = useState('obs')

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

    const saveManut = () => {
        let manut = {
            data: date,
            quilometragem: km,
            servico: manutSelected,
            obs: obs
        }

        console.log(manut)
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
                    onValueChange={value => setManutSelected(value)}
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
        </Container>
    );
  };