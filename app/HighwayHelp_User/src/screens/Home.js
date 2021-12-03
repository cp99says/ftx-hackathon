import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, Image, Linking, Alert, Button, TouchableOpacity, FlatList } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay'
import { NativeModules, PermissionsAndroid, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { height, width } from '../const/const';



export default Test = ({ navigation }) => {

    let data = [{ image: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`, name: 'BMW', desc: 'abc def', _id: 1 },
    { image: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`, name: 'BMW', desc: 'abc def', _id: 2 },
    { image: `https://source.unsplash.com/random/300x200?sig=${Math.random()}`, name: 'BMW', desc: 'abc def', _id: 3 }]



    return (
        <View style={{ backgroundColor: '#ffffff' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    style={{
                        height: wp("20%"), width: wp("20%"), borderRadius: wp("20%"), marginTop: width / 10, margin: width / 20
                    }}
                    source={{ uri: `https://source.unsplash.com/random/300x200?sig=${Math.random()}` }} />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontFamily: 'Comfortaa-Bold', fontSize: 20, color: '#000' }}>Hey! Raghav</Text>
                    <Text style={{ fontFamily: 'Comfortaa-Regular', color: '#8d8484', fontSize: 13 }}>Which car needs our help?</Text>
                </View>
            </View>
            <FlatList
                horizontal={true}
                data={data}
                renderItem={({ item }) => (<View>
                    <Image
                        style={{ width: width - 70, height: width - 100, borderRadius: 10, marginLeft: 20, }}
                        source={{ uri: item.image }} />
                    <Text
                        style={{ fontFamily: 'Comfortaa-Regular', color: '#000', fontSize: 18, marginTop: 10, marginLeft: 25 }}>{item.name}
                    </Text>
                    <Text
                        style={{ fontFamily: 'Comfortaa-Regular', marginLeft: 25, color: '#8d8484', fontSize: 12 }}>{item.desc}</Text>
                </View>)}
                keyExtractor={item => item._id}
                showsHorizontalScrollIndicator={false} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: wp("20%"), width: wp("20%"), backgroundColor: '#ccf3f9', borderRadius: 11 }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../assets/clock.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: wp("20%"), width: wp("20%"), backgroundColor: '#ccf3f9', borderRadius: 11 }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../assets/edit-2.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: wp("20%"), width: wp("20%"), backgroundColor: '#ccf3f9', borderRadius: 11 }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../assets/Group16.png')} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ borderRadius: 10, marginTop: 50, marginBottom: 100, alignSelf: 'center', backgroundColor: '#ff3f3f', width: wp("80%"), height: hp("8%"), justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: '#fff', fontFamily: 'Comfortaa-Bold', fontSize: 18 }}>
                    NEED IMMEDIATE HELP ?
                </Text>
            </TouchableOpacity>
        </View>
    )
}