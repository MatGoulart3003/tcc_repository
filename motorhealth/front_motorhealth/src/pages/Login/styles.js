import styled from 'styled-components/native'

export const Container = styled.View`

    flex:1;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.bg}
`;

export const Title = styled.Text`

    fontSize: 25px;
    
    
`;

export const ButtonInput = styled.TextInput`

    borderBottomWidth: 1;
    height: 40px;
    fontSize:16px
`;

export const ContainerLogin =  styled.View`

    

`;
