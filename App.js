import  React from 'react';
import {Button,View, Text, Image, TextInput, KeyboardAvoidingView,StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyComponent from "./src/pages/Mapas/"
import Login from "./src/pages/Login/"
import Cadastral from "./src/pages/Cadastro/"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
        name="Login" 
        component={Login}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="Cadastral" 
        component={Cadastral} 
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="MyComponent" 
        component={MyComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
