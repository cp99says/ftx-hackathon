// import React, { Component } from 'react'
// import { StyleSheet, View } from 'react-native'
// import MultiSelect from 'react-native-multiple-select'

// const items = [{
//     id: '92iijs7yta',
//     name: 'Ondo'
// }, {
//     id: 'a0s0a8ssbsd',
//     name: 'Ogun'
// }, {
//     id: '16hbajsabsd',
//     name: 'Calabar'
// }, {
//     id: 'nahs75a5sg',
//     name: 'Lagos'
// }, {
//     id: '667atsas',
//     name: 'Maiduguri'
// }, {
//     id: 'hsyasajs',
//     name: 'Anambra'
// }, {
//     id: 'djsjudksjd',
//     name: 'Benue'
// }, {
//     id: 'sdhyaysdj',
//     name: 'Kaduna'
// }, {
//     id: 'suudydjsjd',
//     name: 'Abuja'
// }]

// export default class Service extends Component {
//     state = {
//         selectedItems: []
//     }

//     onSelectedItemsChange = (selectedItems) => {
//         this.setState({ selectedItems }, () => console.warn('Selected Items: ', selectedItems))
//     }

//     render() {
//         const { selectedItems } = this.state
//         return (
//             <View style={styles.container}>
//                 <View style={styles.multiSelectContainer}>
//                     <MultiSelect
//                         items={items}
//                         uniqueKey='id'
//                         onSelectedItemsChange={this.onSelectedItemsChange}
//                         selectedItems={selectedItems}
//                         selectText='Pick Items'
//                         searchInputPlaceholderText='Search Items...'
//                         onChangeInput={(text) => console.warn(text)}
//                         tagRemoveIconColor='#CCC'
//                         tagBorderColor='#CCC'
//                         tagTextColor='#CCC'
//                         selectedItemTextColor='#CCC'
//                         selectedItemIconColor='#CCC'
//                         itemTextColor='#000'
//                         displayKey='name'
//                         searchInputStyle={{ color: '#CCC' }}
//                         submitButtonColor='#CCC'
//                         submitButtonText='Submit'

//                     />
//                 </View>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF'
//     },
//     multiSelectContainer: {
//         height: 400,
//         width: '100%'
//     }
// })
import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import store from '../store/store';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import SendSMS from 'react-native-sms'
import Home from './Home';
import { showNotification } from '../const/const';

const items = [
    { id: 1, name: 'Puncture' },
    { id: 2, name: 'Break fail' },
    { id: 3, name: 'Miss alignment' }
];
const itemsEngine = [
    { id: 1, name: 'Over heat' },
    { id: 2, name: 'Break down' }
]
const itemsFuel = [
    { id: 1, name: 'Dry tank' },
    { id: 2, name: 'Fuel leakage' }
]

export default Service = ({ navigation }) => {
    const [selectedItemsWheels, setSelectedItemsWheels] = useState([]);
    const [selectedItemsEngine, setSelectedItemsEngine] = useState([]);
    const [selecteditemsFuel, setSelectedItemsFuel] = useState([]);
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);

    const onSelectedItemsChange = (selectedItems) => {
        setSelectedItemsWheels(selectedItems);
    };

    const onSelectEngine = (selectedItems) => {
        setSelectedItemsEngine(selectedItems);
    }
    const onSelectFuel = (selectedItems) => {
        setSelectedItemsFuel(selectedItems);
    }


    function submit() {
        console.log(selectedItemsEngine, selectedItemsWheels, selecteditemsFuel)
        var select = selectedItemsEngine + ',' + selectedItemsWheels + ',' + selecteditemsFuel;
        console.log(select);
        store.setSelectedServices(select)


        axios.post('https://ftxapi.imswarnabha.in/api/add_new_request', {

            mechanic_id: "2086e1ebce",
            request:
            {
                name: "Raghav",
                phone: "8102644366",
                vehicle_type: [store.vehicleType],
                location: "near petrol pump",
                coordinates: {
                    user_lat: lat,
                    user_long: long
                },
                wheelsAndTyres: {
                    request_type: selectedItemsWheels
                },
                engine: {
                    request_type: selectedItemsEngine,
                },
                fuel: {
                    request_type: selecteditemsFuel,
                },
            }


        }).then((val) => {
            console.log(val.data)
            showNotification("Request sent Successfully")
        }).catch((err) => {
            console.log(err)
            alert(err)
        }).finally((val1) => {
            navigation.navigate(Home)
            SendSMS.send({
                body: `Raghav needs yous services find the details attached. location:https://www.google.com/maps/dir/?api=1&&destination=${lat},${long} services=${select} user phone number:8102644366`,
                recipients: ['8102644366', '7891497854', '8802216901'],
                successTypes: ['sent', 'queued'],
                allowAndroidSendWithoutReadPermission: true,
            }, (completed, cancelled, error) => {

                console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

            });
        })
    }

    useEffect(() => {
        console.log(store.vehicleType)
        Geolocation.getCurrentPosition(data => {
            console.log("hettttt", data)
            setLat(data.coords.latitude)
            setLong(data.coords.longitude)
        })
    }, []);

    return (

        <ScrollView style={styles.container}>
            <SafeAreaView>
                <Text style={styles.titleText}>
                    How can we help you?
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 10 }}>
                    <Image
                        style={{ height: hp("6%"), width: hp("6%"), marginLeft: 10 }}
                        source={require('../assets/image2.png')} />
                    <Text
                        style={{ fontFamily: 'Comfortaa-Bold', color: '#000', marginLeft: 10, fontSize: 20 }}>Wheels & Tyres</Text>
                </View>
                <MultiSelect

                    items={items}
                    uniqueKey="name"
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={selectedItemsWheels}

                    selectText="  Select problem"
                    searchInputPlaceholderText="Search Items..."
                    onChangeInput={(text) => console.log(text)}
                    tagRemoveIconColor="red"
                    tagBorderColor="#8d8484"
                    tagTextColor="#8d8484"
                    selectedItemTextColor="#CCC"
                    selectedItemIconColor="#CCC"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{ color: '#CCC' }}
                    submitButtonColor="#00649f"
                    submitButtonText="Add"
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 10 }}>
                    <Image
                        style={{ height: hp("6%"), width: hp("6%"), marginLeft: 10 }}
                        source={require('../assets/image3.png')} />
                    <Text
                        style={{ fontFamily: 'Comfortaa-Bold', color: '#000', marginLeft: 10, fontSize: 20 }}>Engine</Text>
                </View>
                <MultiSelect
                    items={itemsEngine}
                    uniqueKey='name'
                    onSelectedItemsChange={onSelectEngine}
                    selectedItems={selectedItemsEngine}
                    selectText="  Select problem"
                    searchInputPlaceholderText="Search Items..."
                    onChangeInput={(text) => console.log(text)}
                    tagRemoveIconColor="red"
                    tagBorderColor="#8d8484"
                    tagTextColor="#8d8484"
                    selectedItemTextColor="#CCC"
                    selectedItemIconColor="#CCC"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{ color: '#CCC' }}
                    submitButtonColor="#00649f"
                    submitButtonText="Add"
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 10 }}>
                    <Image
                        style={{ height: hp("6%"), width: hp("6%"), marginLeft: 10 }}
                        source={require('../assets/image4.png')} />
                    <Text
                        style={{ fontFamily: 'Comfortaa-Bold', color: '#000', marginLeft: 10, fontSize: 20 }}>Fuel</Text>
                </View>
                <MultiSelect
                    items={itemsFuel}
                    uniqueKey='name'
                    onSelectedItemsChange={onSelectFuel}
                    selectedItems={selecteditemsFuel}
                    selectText="  Select problem"
                    searchInputPlaceholderText="Search Items..."
                    onChangeInput={(text) => console.log(text)}
                    tagRemoveIconColor="red"
                    tagBorderColor="#8d8484"
                    tagTextColor="#8d8484"
                    selectedItemTextColor="#CCC"
                    selectedItemIconColor="#CCC"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{ color: '#CCC' }}
                    submitButtonColor="#00649f"
                    submitButtonText="Add"
                />
                <TouchableOpacity
                    onPress={() => {
                        submit()
                    }}
                    style={{ borderRadius: 10, marginTop: 30, marginBottom: 100, alignSelf: 'center', backgroundColor: '#00649f', width: wp("80%"), height: hp("8%"), justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontFamily: 'Comfortaa-Bold', fontSize: 18 }}>
                        Submit Request
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>

    );
};


const styles = StyleSheet.create({
    container: {

        backgroundColor: '#f6feff',
        padding: 10,
    },
    titleText: {
        padding: 8,
        fontSize: 28,
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Comfortaa-Bold'
    },
    headingText: {
        padding: 8,
    },
});