import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
    height: 40px;
    width: 80%;
    borderRadius:15px;
    paddingVertical:8px;
    background-color: #3277CC;
    justify-content: center;
    align-items: center;
    
`;

export const Container = styled.ScrollView`
    flex: 1;  
    background-color: #363636;  
`;

    export const ContentContainer = styled.View`
    align-items: center;
    background-color: #4F4F4F;
    borter-radius: 50px;
    padding-top: 15px;
    margin: 5%;
    border-radius: 5px;
    shadow-color: #FFFF;
    shadow-offset: 2px 4px;
    shadow-opacity: 0.5;
    shadow-radius: 100%;
    elevation: 4;
`;

export const Title = styled.Text`

    font-size: 20px;
    font-weight: bold;
    color: #FFF;

`;

export const CarButton = styled.TouchableOpacity`
    
    justify-content: center;
    height: 150px;
    width: 90%;
    margin:6px;
    border-radius: 5px;
    shadow-color: black;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.5;
    shadow-radius: 100%;
    elevation: 4;

`;
export const ViewRegisterCar = styled.View`
    justify-content: center;
    margin-top: 20px;    
    width: 350px;
    align-items: center;

`;
export const ViewRefreshCar = styled.View`
    justify-content: center;
    margin: 25px;
    width: 350px;
    align-items: center;    
    bottom:0;
`;
export const LabelText = styled.Text`
    font-size: 16px;
    color: #FFFF;
    padding: 4px;
    margin-left:5px;
        
`;
