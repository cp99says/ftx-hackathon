import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, Image, Linking, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home'
import { NativeModules, PermissionsAndroid, Platform } from 'react-native'
import Service from './src/screens/Service';
import SplashScreen from 'react-native-splash-screen'


export default function App() {
  const Stack = createNativeStackNavigator();
  let authorized = PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_SMS);

  useEffect(() => {
    SplashScreen.hide();
  }, [])



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Service" component={Service} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}