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

export const CarButton = styled.TouchableOpacity`
    
    justify-content: center;
    height: 40px;
    width: 80%;
    paddingertical:8px;
    border-color: #696969;
    border-width: 1px;
    margin-top:12px;
    border-radius: 5px;

`;
export const ViewRegisterCar = styled.View`
    justify-content: center;
    margin-top: 50px;    
    width: 350px;
    align-items: center;

`;
export const ViewRefreshCar = styled.View`
    justify-content: center;
    margin: 25px;
    width: 350px;
    align-items: center;
    position: absolute;
    bottom:0;
`;

