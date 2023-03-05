import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import styles from "./style";

export default function LogIn() {
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}> 
                <Image
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%', alignSelf: 'center'}}
                    resizeMode="contain"
                />
                <Text style={styles.motorhealthText}>MotorHealth</Text>
            </View>

            <View style={styles.conternerIterationArea}>
                <Text style={styles.welcome}>Bem vindo ao MotorHealth!</Text>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <Text style= {styles.textCreateAccount}>Não tem uma conta? clique no botão abaixo para criar uma!</Text>
                <TouchableOpacity style={styles.createAccountButton}>
                    <Text style={styles.buttonText}>Criar Conta</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
}
