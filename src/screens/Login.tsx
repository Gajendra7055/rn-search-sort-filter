import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';


export default function Login() {
  console.log('this is Login..');
  
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: '#000'}}>Login Screen</Text>
    </SafeAreaView>
  );
}

