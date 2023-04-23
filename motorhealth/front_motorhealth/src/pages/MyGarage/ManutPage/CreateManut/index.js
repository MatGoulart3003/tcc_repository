import React, { useState } from "react";
import {Container, Title, ButtonText } from "../CreateManut/style";
import { Button } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';


export default function CreateManut(){

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
        setShow(true);
        // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <Container>
            <Button onPress={showDatepicker} title="Show date picker!" />
            <Button onPress={showTimepicker} title="Show time picker!" />
            <ButtonText>selected: {date.toLocaleString()}</ButtonText>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
                />
            )}
        </Container>
    );
  };
