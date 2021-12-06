import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, Image, StyleSheet, Linking, Alert, Button, TouchableOpacity, FlatList } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay'
import { NativeModules, PermissionsAndroid, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { height, width } from '../const/const';
import store from '../store/store';




export default Type = ({ navigation }) => {




    return (
        <View style={{ flex: 1, backgroundColor: '#f6feff', alignItems: 'center' }}>
            <Text style={styles.titleText}>
                Select your vehicle type
            </Text>
            <View style={{ width: width, flexDirection: 'row', alignItems: 'center', marginTop: "20%", justifyContent: 'space-evenly' }}>
                <TouchableOpacity
                    onPress={() => {
                        store.setVehicleType('Bike')
                        navigation.navigate('Service')
                    }}
                    style={{ borderRadius: 8, backgroundColor: '#ffffff', elevation: 2, alignItems: 'center', padding: 30 }}>
                    <Image
                        style={{ width: 120, height: 120, resizeMode: 'contain' }}
                        source={require('../assets/bike.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        store.setVehicleType('Scooter')
                        navigation.navigate('Service')
                    }}
                    style={{ borderRadius: 8, backgroundColor: '#ffffff', elevation: 2, alignItems: 'center', padding: 30 }}>
                    <Image
                        style={{ width: 120, height: 120, resizeMode: 'contain' }}
                        source={require('../assets/scooter.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ width: width, flexDirection: 'row', alignItems: 'center', marginTop: "5%", justifyContent: 'space-evenly' }}>
                <TouchableOpacity
                    onPress={() => {
                        store.setVehicleType('Car')
                        navigation.navigate('Service')
                    }}
                    style={{ borderRadius: 8, backgroundColor: '#ffffff', elevation: 2, alignItems: 'center', padding: 30 }}>
                    <Image
                        style={{ width: 120, height: 120, resizeMode: 'contain' }}
                        source={require('../assets/car.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        store.setVehicleType('Truck')
                        navigation.navigate('Service')
                    }}
                    style={{ borderRadius: 8, backgroundColor: '#ffffff', elevation: 2, alignItems: 'center', padding: 30 }}>
                    <Image
                        style={{ width: 120, height: 120, resizeMode: 'contain' }}
                        source={require('../assets/truck.png')} />
                </TouchableOpacity>
            </View>

        </View>
    )

}
const styles = StyleSheet.create({
    container: {

        backgroundColor: '#f6feff',
        padding: 10,
    },
    titleText: {
        padding: 5,
        marginTop: "8%",
        fontSize: 27,
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Comfortaa-Bold'
    },
    headingText: {
        padding: 8,
    },
});