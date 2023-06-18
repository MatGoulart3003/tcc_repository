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
    background-color: #363636;
    padding-top: 15px;
    align-itens: center;
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
export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#A9A9A9"
  })`
    height: 20px;
    width: 183px;
    border-color: black;
    font-size: 14px;
    color: #FFF;
`;

export const LabelText = styled.Text`
    font-size: 16px;
    color: #FFF;
    text-align: center;
`;

export const ButtonDate = styled.TouchableOpacity`
    
    
`;
export const ViewDate = styled.View`
    justify-content: center;
    margin-top: 15px;
    margin-left: 5px;
    border-color: #A9A9A9;
    border-width: 1px;
    padding: 10px;
    border-radius: 5px;
    heigh: 100px;
    width: 140px;
`;
export const ViewPicker = styled.View`
    justify-content: center;
    margin: 25px;
    color: #FFF;
    margin-left: 5px;
    margin-right: 5px;
    border-color: #A9A9A9;
    border-width: 1px;
    border-radius: 5px;   
   
`;
export const ViewDateKM = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;

`
export const ViewKM = styled.View`
    justify-content: center;
    margin-top: 15px;
    margin-left: 25px;
    border-color: #A9A9A9;
    border-width: 1px;
    padding: 10px;
    border-radius: 5px;
    heigh: 100px;
    width: 195px;  

`
export const ViewObs = styled.View`
    justify-content: center;
    margin-top: 5px;
    margin-left: 5px;
    border-color: #A9A9A9;
    border-width: 1px;
    padding: 10px;
    border-radius: 5px;
    heigh: 150px;
    width: 360px;

`
export const InputObs = styled.TextInput.attrs({
    placeholderTextColor: "#A9A9A9"
  })`
    height: 150px;
    width: 345px;
    border-color: black;
    font-size: 16px;
    color: #FFF;
`;
export const ViewSave = styled.View`
    align-items: center;
    padding: 20px;
    padding-top:30px;
`;
    export const ContentContainer = styled.View`
    
    background-color: #4F4F4F;
    padding-bottom: 20px;
    margin-left: 5%;
    margin-right:5%;
    margin-top: 5%;
    border-radius: 5px;
    shadow-color: #FFFF;
    shadow-offset: 2px 4px;
    shadow-opacity: 0.5;
    shadow-radius: 100%;
    elevation: 4;
`;
