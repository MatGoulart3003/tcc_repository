import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome"
import Login from '../pages/Login'
import CreateUser from '../pages/CreateUser'
import MyGarage from "../pages/MyGarage"
import CreateCar from "../pages/CreateCar"
import ManutPage from "../pages/MyGarage/ManutPage";
import CreateManut from "../pages/MyGarage/ManutPage/CreateManut";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}            
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}            
            />
            <Stack.Screen
                name="CreateUser"
                component={CreateUser}
                options={{ headerShown: false }}            
            />
            <Stack.Screen
                name="MyGarage"
                component={MyGarage}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="CreateCar"
                component={CreateCar}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="ManutPage"
                component={ManutPage}
                options={{ headerShown: false}}
            />
             <Stack.Screen
                name="CreateManut"
                component={CreateManut}
                options={{ headerShown: false}}
            />

        </Stack.Navigator>
    )
}