import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, Image, Linking, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home'
import { NativeModules, PermissionsAndroid, Platform } from 'react-native'
import Service from './src/screens/Service';
import SplashScreen from 'react-native-splash-screen'
import messaging from '@react-native-firebase/messaging';
import Type from './src/screens/Type';
import axios from 'axios';


export default function App() {
  const Stack = createNativeStackNavigator();
  let authorized = PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_SMS);


  function fncUpdate(tok) {
    axios.patch('https://ftxapi.imswarnabha.in/api/user_fcm_token', {
      user_id: "860f191d05",
      fcm_token: tok
    }).then((val) => {
      console.log("tokkkkk", tok)
      console.log(val.data)
    }).catch((err) => {
      console.log(err)
      alert(err)
    })
  }

  useEffect(() => {
    SplashScreen.hide();
    var tok
    messaging()
      .getToken()
      .then(token => {
        fncUpdate(token)
        tok = token;
        console.log(token)
      })



  }, [])



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name='Type' component={Type} />
        <Stack.Screen options={{ headerShown: false }} name="Service" component={Service} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}