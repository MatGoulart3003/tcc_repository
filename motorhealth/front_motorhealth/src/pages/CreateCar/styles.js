import styled from 'styled-components/native'

export const Container = styled.ScrollView`
    flex: 1;
    background-color: #363636;
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
    border-color: #FFFF;
    border-width: 1px;
    border-radius: 5px;
    background-color: #4F4F4F;
          
`;

export const OptionSelectedText = styled.Text`
    font-size: 16px;
    color: #FFFF;
    padding: 4px;
    margin-left:10px;
`;

export const ViewCarSelected = styled.View`

    border-color: #A9A9A9;
    align-itens: center;
    height: 235px;
    width: 90%;   
    justify-content: center;
    margin:6px;
    shadow-color: black;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.5;
    shadow-radius: 100%;
    elevation: 4;
`;

export const ViewButton = styled.View`
    text-align: center;

`;

export const ContentContainer = styled.View`
    align-items: center;
    background-color: #4F4F4F;
    border-radius: 50px;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 2%;
    border-radius: 5px;
    border-radius: 5px;
    shadow-color: #FFFF;
    shadow-offset: 2px 4px;
    shadow-opacity: 0.5;
    shadow-radius: 100%;
    elevation: 4;
`;