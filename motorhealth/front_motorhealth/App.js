import React from "react";
import { StatusBar } from "react-native";
import * as Notifications from 'expo-notifications';

import { NavigationContainer } from "@react-navigation/native"
import { ThemeProvider } from "styled-components";
import Routes from './src/routes'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

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