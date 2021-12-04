import React, {useState, useEffect} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions,
    FlatList,
    Button,
    TextInput,
    StatusBar,
    Image,
} from "react-native";
import {COLORS} from "../../Constants/GlobalStyle";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {API_CALL} from "../../Functions/ApiFunctions";
import {Input, Loader} from "../../Components/Components";
import {FocusAwareStatusBar, showNotification, storeData} from "../../Functions/AppFunctions";
import Store from "../../Store/Store";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function Login() {
        if (email == "" || password == "") {
            showNotification("Please,fill the form properly");
            return;
        } else {
            setLoading(true);

            try {
                const data = await API_CALL(
                    {
                        url: `/api/getMechanicDataById/2086e1ebce`,
                        method: "get",
                    },
                    {type: "WEB"}
                );
                console.log(data.data);
                if (data) {
                    let authState = "true";
                    let mech_data = JSON.stringify(data.data[0]);
                    storeData("authState", authState);
                    storeData("mechID", data.data[0].mechanic_id);
                    storeData("mechData", mech_data);
                    setLoading(false);
                    Store.setMechIdVal(data.data[0].mechanic_id);
                    Store.setRegUserDetails(data.data[0]);
                    Store.setAuthTokenVal(1);
                }
            } catch (error) {
                showNotification("Error Occurred");
                console.log(error);
                setLoading(false);
            }
        }
    }
    return loading ? (
        <>
            <FocusAwareStatusBar backgroundColor={COLORS.HEADER_GREY} />
            <Loader />
        </>
    ) : (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar backgroundColor={COLORS.HEADER_GREY} />
            <View style={styles.container1}>
                <Image
                    source={require("../../Assets/Images/LoginBG.png")}
                    style={{
                        width: wp(80),
                        height: hp(10),
                        resizeMode: "contain",
                    }}
                />
            </View>
            <View style={styles.container2}>
                <Input
                    Title="Username"
                    placeholder="Enter your username"
                    style={{marginTop: hp(3)}}
                    iconName={"email"}
                    defaultValue={email}
                    onChangeText={txt => {
                        setEmail(txt);
                    }}
                />
                <Input
                    Title="Password"
                    placeholder="Enter your Password"
                    style={{marginTop: hp(2)}}
                    secureTextEntry={true}
                    iconName={"lock"}
                    defaultValue={password}
                    onChangeText={txt => {
                        setPassword(txt);
                    }}
                />
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
                        marginTop: wp(10),
                    }}
                    onPress={() => {
                        Login();
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
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: "1.2%",
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
