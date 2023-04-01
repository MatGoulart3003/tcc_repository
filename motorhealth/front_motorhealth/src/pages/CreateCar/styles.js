import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    padding-top: 10%
    align-items: center;
    background-color: #C0C0C0;
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