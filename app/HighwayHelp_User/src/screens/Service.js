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


    const onSelectedItemsChange = (selectedItems) => {
        setSelectedItemsWheels(selectedItems);
    };

    const onSelectEngine = (selectedItems) => {
        setSelectedItemsEngine(selectedItems);
    }
    const onSelectFuel = (selectedItems) => {
        setSelectedItemsFuel(selectedItems);
    }

    useEffect(() => {

    }, []);

    return (

        <ScrollView style={styles.container}>
            <SafeAreaView>
                <Text style={styles.titleText}>
                    How can we help?
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Image
                        style={{ height: hp("6%"), width: hp("6%"), marginLeft: 10 }}
                        source={require('../assets/image2.png')} />
                    <Text
                        style={{ fontFamily: 'Comfortaa-Bold', color: '#000', marginLeft: 10, fontSize: 20 }}>Wheels & Tyres</Text>
                </View>
                <MultiSelect

                    items={items}
                    uniqueKey="id"
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={selectedItemsWheels}
                    selectText="Select problem"
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
                    uniqueKey='id'
                    onSelectedItemsChange={onSelectEngine}
                    selectedItems={selectedItemsEngine}
                    selectText="Select problem"
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
                    uniqueKey='id'
                    onSelectedItemsChange={onSelectFuel}
                    selectedItems={selecteditemsFuel}
                    selectText="Select problem"
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
                        navigation.navigate('Service')
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
        fontSize: 30,
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Comfortaa-Bold'
    },
    headingText: {
        padding: 8,
    },
});