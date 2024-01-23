import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../pages/Home";
import Car from "../pages/Car";

const Stack = createNativeStackNavigator();

export default function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Car"
        component={Car}
        options={{
          title: 'Meu carrinho'
        }}
      />
    </Stack.Navigator>
  )
}