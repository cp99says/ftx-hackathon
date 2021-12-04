import React, {useEffect, useState} from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    StatusBar,
    ImageBackground,
    Animated,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
    TouchableOpacity,
    PermissionsAndroid,
    FlatList,
} from "react-native";
import {COLORS} from "../../Constants/GlobalStyle";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Modal from "react-native-modal";
import {ExamCard, SubjectCard, TicketCard} from "../../Components/HomeScreenComponents";
import {
    FocusAwareStatusBar,
    localNotification,
    showNotification,
} from "../../Functions/AppFunctions";
import {API_CALL} from "../../Functions/ApiFunctions";
import {Loader} from "../../Components/Components";
import Store from "../../Store/Store";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("screen").height;

const HomeScreen = ({navigation}) => {
    const [fadeAnimation, setFadeAnimation] = useState(new Animated.Value(0));
    const [fadeAnimationImage, setFadeAnimationImage] = useState(new Animated.Value(0));
    const [isModalVisible, setModalVisible] = useState(false);
    const [questionCount, setquestionCount] = useState("");
    const [subjectName, setSubjectName] = useState("");
    const [topicName, setTopicName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const requestCameraPermission = async () => {
        let status = false;
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Cool Photo App Camera Permission",
                    message:
                        "Cool Photo App needs access to your camera " +
                        "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK",
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                // console.log("You can use the camera");
                status = true;
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
        return status;
    };
    useEffect(() => {
        fadeIn();
    }, []);
    const fadeIn = () => {
        Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: true,
        }).start();
        Animated.timing(fadeAnimationImage, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    let data = [
        {
            id: 1,
            name: "Demo User",
            phone: "9845698523",
            vehicle_type: "Suv ",
            location: "HYD",
            serviceType: "Repair",
        },
        {
            id: 2,
            name: "Demo User1",
            phone: "8741236548",
            vehicle_type: "MG Hector",
            location: "Delhi",
            sericeType: "Repair",
        },
    ];
    function renderItem({item}) {
        return (
            <View style={{marginVertical: "2.8%", alignSelf: "center"}}>
                <TicketCard data={item} />
            </View>
        );
    }
    return loading ? (
        <>
            <FocusAwareStatusBar backgroundColor={COLORS.HEADER_GREY} />
            <Loader />
        </>
    ) : (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar backgroundColor={COLORS.WHITE} />

            <View style={styles.mainContainer}>
                <View style={styles.container1}>
                    <Image
                        source={{uri: "https://picsum.photos/id/1011/200"}}
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 50 / 2,
                            marginLeft: "5%",
                        }}
                    />
                    <MaterialCommunityIcons
                        name={"bell-outline"}
                        size={32}
                        style={{marginRight: "6%"}}
                        color={COLORS.PURPLE}
                    />
                </View>
                <View style={{marginLeft: "4%", marginTop: -100}}>
                    <Text style={{fontSize: hp(4), color: COLORS.PURPLE}}>
                        Hello,{"\n"}
                        <Text
                            style={{
                                fontSize: hp(4),
                                color: COLORS.PURPLE,
                                fontWeight: "bold",
                            }}
                        >
                            {Store.regUserDetails.name} 😀
                        </Text>
                    </Text>
                </View>
            </View>

            <View style={styles.container3}>
                <Text
                    style={{
                        fontSize: hp(2.8),
                        color: COLORS.PURPLE,
                        fontWeight: "bold",
                        marginBottom: "5%",
                        marginLeft: "4%",
                    }}
                >
                    Service Requests
                </Text>
                <FlatList
                    data={data}
                    contentContainerStyle={{paddingBottom: "20%"}}
                    renderItem={renderItem}
                    keyExtractor={e => e.id}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container1: {
        flex: 0.8,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "-20%",
    },
    container2: {
        flex: 2,
        marginTop: "-5%",
        backgroundColor: "pink",

        justifyContent: "center",
    },
    container3: {
        flex: 2,
        marginTop: "-15%",
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
export default HomeScreen;
