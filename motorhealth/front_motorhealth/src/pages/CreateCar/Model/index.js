import React,{Component} from "react";
import {View, Text, StyleSheet} from 'react-native'

export default class Model extends Component{
    render(){
        return(
            <View>
                <Text style={styles.nomeCarro}>{this.props.data.nome}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    nomeCarro:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})