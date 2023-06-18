import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #363636;
    borter-radius: 50px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#FFFFFF"
  })`   
    width: 80%;
    background-color: #696969;
    margin-vertical: 10px;
    padding: 10px;
    font-size: 18px;
    color: #FFFFFF;
    borderRadius:2px;
    shadow-color: black;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.5;
    shadow-radius: 50px;
    elevation: 4;
`;

 export const Button = styled.TouchableOpacity`
    height: 40px;
    width: 80%;
    borderRadius:50px;
    paddingVertical:8px;
    background-color: #3277CC;
    justify-content: center;
    align-items: center;
    top: 30px;
 
`;

export const ButtonText = styled.Text`
    color: #F5FCFF;
    font-size: 18px;
    font-weight: bold;
`;
export const Title = styled.Text`

    font-size: 25px;
    color: #FFFFFF;
    font-weight: bold ;
    bottom: 50px;

`;
export const TextLogin = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
    font-weight: bold ;
    
`;

export const ViewLogin = styled.View`
    height: 80%;
    width: 90%;
    borderRadius:10px;
    paddingVertical:8px;
    background-color: #4F4F4F;
    justify-content: center;
    align-items: center;
    shadow-color: #FFFF;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.5;
    shadow-radius: 50px;
    elevation: 4;
`;

export const ViewLabel = styled.View`   
    width: 100%;
    background-color: #4F4F4F;
    padding-left: 40px;
    padding-top: 30px;
`;
