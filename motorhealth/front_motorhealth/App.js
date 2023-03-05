import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native"
import { ThemeProvider } from "styled-components";
import Routes from './src/routes'

const theme = {
  bg: '#3277CC'
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <NavigationContainer>
      <StatusBar backgroundColor="#3277CC" barStyle="light-content" />
      <Routes/>
    </NavigationContainer>
    </ThemeProvider>
  );
}