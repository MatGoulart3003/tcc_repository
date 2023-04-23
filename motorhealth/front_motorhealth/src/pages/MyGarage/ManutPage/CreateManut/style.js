import styled from 'styled-components/native'

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

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #363636;
    borter-radius: 50px;
    padding-top: 15px;
    `;

export const Title = styled.Text`

    font-size: 20px;
    font-weight: bold;
    color: #FFF;

`;

export const ButtonText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
`
export const Input = styled.TextInput`
    height: 40px;
    width: 80%;
    border-color: black;
    border-bottom-width: 1px;
    margin-vertical: 10px;
    padding: 10px;
    font-size: 18px;
`;
