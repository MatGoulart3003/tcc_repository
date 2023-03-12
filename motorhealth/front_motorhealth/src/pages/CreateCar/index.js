import React,{Component} from "react";
import { Text, View, FlatList } from "react-native";
import api from '../../Services/Api'
import Carro from "./Model";

export default class CreateCar extends Component{

    constructor(props){
        super(props);
        this.state = {
            carros: []
        }
    }

    async componentDidMount(){
        const response = await api.get('/marcas');
        this.setState({
            carros: response.data
        });

    }

    render(){
        return(
        <View>
            <FlatList
            data={this.state.carros}
            keyExtractor={item => item.codigo}
            renderItem={({item}) => <Carro data={item} />}
            />
        </View>
    );
    }
    
}