import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, Image, Linking, Alert, Button, TouchableOpacity } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay'
import { NativeModules, PermissionsAndroid, Platform } from 'react-native'
import SendSMS from 'react-native-sms'



export default Test = ({ navigation }) => {

    function createOrder() {


        SendSMS.send({
            body: 'www.youtube.com',
            recipients: ['8102644366', '7891497854'],
            successTypes: ['sent', 'queued'],
            allowAndroidSendWithoutReadPermission: true,
        }, (completed, cancelled, error) => {

            console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

        });


        // var options = {
        //     description: 'Credits towards consultation',
        //     image: 'https://i.imgur.com/3g7nmJC.png',
        //     currency: 'INR',
        //     key: 'rzp_test_JKuzwB3xyaw6XT', // Your api key d25rObT8jZqKao7hgbydPqwQ
        //     amount: '50000',
        //     name: 'Acme Corp',
        //     // order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
        //     prefill: {
        //         email: 'gaurav.kumar@example.com',
        //         contact: '9191919191',
        //         name: 'Gaurav Kumar'
        //     },
        //     // external: {
        //     //     'wallets': ['paytm']
        //     // },
        //     theme: { color: '#53a20e' }
        // }
        // RazorpayCheckout.open(options).then((data1) => {
        //     // handle success
        //     console.log(data1)
        //     alert(`Success: ${data1.razorpay_payment_id}`);
        // }).catch((error) => {
        //     // handle failure
        //     console.log(error)
        //     alert(`Error: ${error.code} | ${error.description}`);
        // });
    }

    return (
        <View><Text>Hello</Text>
            <TouchableOpacity
                onPress={() => { createOrder() }}><Text>Create</Text></TouchableOpacity></View>
    )

}