import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#0F548E"
    },
    containerLogo:{
        flex:1,
        backgroundColor:"#0F548E",
        justifyContent: 'center',
        alignItens:'center'
    },
    conternerIterationArea:{
        flex:1,
        backgroundColor: "#363636",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd:"5%"
    },
    motorhealthText:{
        position:"absolute",
        alignSelf: "center",
        bottom:10,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center",
        color: "#FFFFFF",
    },
    welcome:{
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 12,
        marginBottom: 12,
        textAlign: "center",
        color: "#FFFFFF"
    },    
    loginButton:{
       
        backgroundColor: '#3277CC',
        borderRadius:50,
        paddingVertical:8,
        height:40,
        width:'80%',
        alignSelf: 'center',
        top: 30,
        alignItems:'center',
        justifyContent:'center',
        
    },
    buttonText:{
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight:'bold'
    },    
    textCreateAccount:{
        
        fontSize: 16,
        textAlign: 'center',
        alignItems: 'center',
        top: 68,
        fontWeight:'bold',
        color: "#FFFFFF"
    },
    createAccountButton:{
        backgroundColor: '#3277CC',
        borderRadius:50,
        paddingVertical:8,
        height:40,
        width:'80%',
        alignSelf: 'center',
        top: 100,
        alignItems:'center',
        justifyContent:'center',
    }

})

export default styles;