import {View, Text,SafeAreaView} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';

export type RootStackParamList = {
  Home: undefined;
};
export default function RootStack() {
  const Stack:any = createNativeStackNavigator<RootStackParamList>();
  console.log('this is rootStack..');//--done
  
  return (
    <Stack.Navigator options={{Headers: false}}>
      {/* <Stack.Screen name="Login" component={Login} /> */}
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}


