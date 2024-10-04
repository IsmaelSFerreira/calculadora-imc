import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home/Index';
import Results from '../screens/Result/Index';
import Informacoes from '../screens/Informacoes/Index';

const Stack = createNativeStackNavigator();

function Routers() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen options={{title: "Calculadora de IMC"}} name="Home" component={Home}/>
        <Stack.Screen options={{title: "Resultado IMC"}} name="Result" component={Results} />
        <Stack.Screen options={{title: "Informações"}} name="Informacoes" component={Informacoes} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routers;