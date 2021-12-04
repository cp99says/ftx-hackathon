import React, {useState, useEffect} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions,
    PermissionsAndroid,
    FlatList,
    Button,
    TextInput,
    StatusBar,
    Image,
    ScrollView,
} from "react-native";
import {COLORS} from "../../Constants/GlobalStyle";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import {API_CALL} from "../../Functions/ApiFunctions";
import {Input, Loader} from "../../Components/Components";
import {FocusAwareStatusBar, showNotification, storeData} from "../../Functions/AppFunctions";
import GetLocation from "react-native-get-location";
import Store from "../../Store/Store";
import RNAndroidLocationEnabler from "react-native-android-location-enabler";
export default function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: "",
        phone: "",
        address: "",
        coordinates: {
            mech_lat: "",
            mech_long: "",
        },
        location: "",
    });

    useEffect(() => {
        // initPageLoadEvents();
    }, []);
    async function getUserCoordinates() {
        let returnObj = "";

        const hasPermission = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        console.log(hasPermission);
        if (hasPermission) {
            try {
                const data = await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
                    interval: 10000,
                    fastInterval: 5000,
                });
                if (data) {
                    try {
                        const location = await GetLocation.getCurrentPosition({
                            enableHighAccuracy: false,
                            timeout: 15000,
                        });
                        returnObj = location;
                    } catch (error) {
                        const {code, message} = error;
                        console.log(code, message);
                    }
                }
            } catch (error) {
                console.log(error);
                showNotification("Error,Enable GPS");
                return;
            }
        } else {
            showNotification("Permissions Denied");
        }
        return returnObj;
    }
    async function Register() {
        const data = await getUserCoordinates();
        console.log("FINAL", data);

        if (data) {
            if (
                (userDetails.name == "") |
                (userDetails.phone == "") |
                (userDetails.address == "") |
                (userDetails.location == "")
            ) {
                showNotification("Please,fill the form properly");
                return;
            } else {
                let obj = userDetails;
                obj.coordinates.mech_lat = data.latitude;
                obj.coordinates.mech_long = data.longitude;
                setUserDetails(obj);
                setLoading(true);
                // console.log(userDetails);
                try {
                    const data = await API_CALL(
                        {
                            url: `/api/register_mechanic`,
                            method: "post",
                            data: userDetails,
                        },
                        {type: "WEB"}
                    );
                    console.log("data.data", data);
                    if (data.status) {
                        setLoading(false);
                        showNotification(data.message);
                        let authState = "true";
                        storeData("authState", authState);
                        Store.setRegUserDetails(data.data);
                        Store.setAuthTokenVal(1);
                    }
                } catch (error) {
                    showNotification("Error Occurred");
                    console.log(error);
                }
            }
        }
        // if (email == '' || username == '' || password == '') {
        //   showNotification('Please,fill the form properly');
        //   return;
        // } else {
        //   setLoading(true);
        //   try {
        //     const data = await API_CALL(
        //       {
        //         url: `/api/teacher/register?username=${username}&email=${email}&password=${password}`,
        //         method: 'post',
        //       },
        //       {type: 'WEB'},
        //     );
        //     // console.log("data.data", data.data)
        //     console.log(data);
        //     if (data.status == 'success') {
        //       setLoading(false);
        //       let authState = 'true';
        //       showNotification('Registered Successfully');

        //       storeData('authState', authState);
        //       storeData('teacherId', data.teacher_id);
        //       storeData('userName', data.username);

        //       Store.setTeacherIdVal(data.teacher_id);
        //       Store.setUsernameVal(data.username);
        //       Store.setAuthTokenVal(1);
        //     }
        //   } catch (error) {
        //     showNotification('Error Occurred');
        //     console.log(error);
        //   }
        // }
    }
    return loading ? (
        <>
            <FocusAwareStatusBar backgroundColor={COLORS.HEADER_GREY} />
            <Loader />
        </>
    ) : (
        <ScrollView
            style={styles.mainContainer}
            contentContainerStyle={{
                paddingTop: "1.2%",
                paddingBottom: "8%",
                backgroundColor: COLORS.WHITE,
            }}
            keyboardShouldPersistTaps={"handled"}
        >
            <FocusAwareStatusBar backgroundColor={COLORS.HEADER_GREY} />
            <View style={styles.container1}>
                {/* <Image
                    source={require("../../Assets/Images/logo.png")}
                    style={{
                        width: wp(80),
                        height: hp(10),
                        marginTop: 50,
                        resizeMode: "contain",
                    }}
                /> */}
            </View>
            <View style={styles.container2}>
                <Input
                    Title="Name"
                    placeholder="Enter your Name"
                    style={{marginTop: hp(3)}}
                    iconName={"account-box"}
                    defaultValue={userDetails.name}
                    onChangeText={txt => {
                        let obj = userDetails;
                        obj.name = txt;
                        setUserDetails(obj);
                    }}
                />
                <Input
                    Title="Phone Number"
                    placeholder="Enter your phone number"
                    style={{marginTop: hp(2)}}
                    iconName={"local-phone"}
                    keyboardType={"phone-pad"}
                    defaultValue={userDetails.phone}
                    onChangeText={txt => {
                        let obj = userDetails;
                        obj.phone = txt;
                        setUserDetails(obj);
                    }}
                />
                <Input
                    Title="Address"
                    placeholder="Enter your Address"
                    style={{marginTop: hp(2)}}
                    height={100}
                    textAlignVertical={"top"}
                    iconName={"home-repair-service"}
                    defaultValue={userDetails.address}
                    onChangeText={txt => {
                        let obj = userDetails;
                        obj.address = txt;
                        setUserDetails(obj);
                    }}
                />
                <Input
                    Title="Landmark"
                    placeholder="Enter Landmark"
                    style={{marginTop: hp(2)}}
                    height={100}
                    textAlignVertical={"top"}
                    iconName={"home-repair-service"}
                    defaultValue={userDetails.location}
                    onChangeText={txt => {
                        let obj = userDetails;
                        obj.location = txt;
                        setUserDetails(obj);
                    }}
                />
                <View
                    style={{
                        marginTop: "14%",
                        alignSelf: "flex-start",
                        marginLeft: "3.8%",
                    }}
                >
                    {/* <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons
                name={'location-pin'}
                size={26}
                color={COLORS.PURPLE}
              />
              <Text
                style={{
                  fontFamily: 'Montserrat-Medium',
                  color: COLORS.PURPLE,
                  fontSize: 18,
                  marginLeft: '1%',
                }}>
                {'Select Location'}
              </Text>
            </View>
            <View style={{marginTop: '2.2%'}}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,

                  width: wp(90),
                  borderWidth: 1,
                  height: 50,
                  justifyContent: 'center',
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    color: 'grey',
                    textAlignVertical: 'center',
                    paddingLeft: '2.8%',
                    marginBottom: '0.5%',
                  }}>
                  Select Location
                </Text>
              </TouchableOpacity>
            </View>
          </View> */}
                </View>
            </View>

            <View style={styles.container3}>
                <TouchableOpacity
                    style={{
                        alignSelf: "center",
                        width: wp(60),
                        backgroundColor: COLORS.PURPLE,
                        borderRadius: 8,
                        justifyContent: "center",
                        paddingVertical: "3.4%",
                        marginTop: wp(15),
                    }}
                    onPress={() => {
                        Register();
                    }}
                >
                    <Text
                        style={{
                            alignSelf: "center",
                            fontSize: 18,
                            fontFamily: "Montserrat-SemiBold",
                            color: COLORS.WHITE,
                        }}
                    >
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.WHITE,

        // paddingBottom: "5%",
    },
    card: {
        width: wp(95),
        elevation: 5,
        backgroundColor: COLORS.WHITE,
        marginVertical: "2%",
        alignSelf: "center",
        borderRadius: 5,
        padding: 15,
    },
    container1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    container2: {
        flex: 1.5,

        alignItems: "center",
    },
    container3: {
        flex: 1,
    },
    TextContainer: {
        flex: 1,
        justifyContent: "center",
    },
    buttonRegister: {
        width: wp(80),
        alignSelf: "center",
        paddingVertical: "5%",
        borderRadius: 50,
        backgroundColor: COLORS.ORANGE,
        marginBottom: "7.4%",
    },
    buttonLogin: {
        width: wp(80),
        alignSelf: "center",
        paddingVertical: "5%",
        borderRadius: 50,
        backgroundColor: COLORS.PURPLE_LIGHT,
    },
});
