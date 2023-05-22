import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: #363636;
    borter-radius: 50px;
`;


export const Input = styled.TextInput`
    height: 40px;
    width: 80%;
    border-color: black;
    border-bottom-width: 1px;
    margin-vertical: 10px;
    padding: 10px;
    font-size: 18px;
`;

 export const Button = styled.TouchableOpacity`
    height: 40px;
    width: 80%;
    borderRadius:50px;
    background-color: #3277CC;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 10px;
    margin-left: 35px;
`;

export const ButtonText = styled.Text`
    color: #F5FCFF;
    font-size: 18px;
    font-weight: bold;
    padding-left: 15px;
`;
export const Title = styled.Text`

    font-size: 25px;
    color: #FFFFFF;
    font-weight: bold ;
    bottom: 100px;

`;
export const TextLogin = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
    font-weight: bold ;
    
`;
export const TextLogin2 = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
    font-weight: bold ;
    bottom: 30px;
`;

export const ViewOptions = styled.View`
    justify-content: center;
    height: 140px;
    width: 90%;
    paddingVertical:8px;
    border-color: #696969;
    margin-top:12px;
    margin-bottom:12px;
    border-radius: 0.5px;
    shadow-color: black;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.5;
    shadow-radius: 50px;
    elevation: 4;
`;

export const ViewPicker = styled.View`
    justify-content: center;
    height: 60px;
    margin: 10px;
    border-color: #A9A9A9;
    border-width: 1px;
    border-radius: 5px;
    background-color: #4F4F4F;
          
`;

export const OptionSelectedText = styled.Text`
    font-size: 16px;
    color: white;
    padding: 4px;
`;

export const ViewCarSelected = styled.View`

    border-color: #A9A9A9;
    border-width: 1px;
    border-radius: 5px;
    align-itens: center;
    height: 220px;
    width: 90%;   
`;

export const ViewButton = styled.View`
    text-align: center;

`;