import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  RefreshControl,
  FlatList,
  Image,
  TextInput,
  StatusBar,
  ScrollView,
} from 'react-native';
import {COLORS} from '../../Constants/GlobalStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FocusAwareStatusBar} from '../../Functions/AppFunctions';
import {Loader} from '../../Components/Components';
import {API_CALL} from '../../Functions/ApiFunctions';

export default function SubjectExamPreview({route}) {
  return (
    <View>
      <Text>HI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    // paddingBottom: "5%",
  },
  card: {
    width: wp(95),
    elevation: 5,
    backgroundColor: COLORS.WHITE,
    marginVertical: '2%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 15,
  },
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  head: {
    height: 40,
    backgroundColor: COLORS.PURPLE_LIGHT,
  },
  wrapper: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    backgroundColor: COLORS.PURPLE_LIGHT,
  },
  row: {
    height: 28,
  },
  text: {
    textAlign: 'center',
    color: COLORS.WHITE,
  },
  textData: {
    textAlign: 'center',
  },
  container1: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container2: {
    flex: 3,
    marginTop: '-5%',
    justifyContent: 'center',
  },
  container3: {
    flex: 3,
    marginTop: '-10%',
  },
  TextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonRegister: {
    width: wp(80),
    alignSelf: 'center',
    paddingVertical: '5%',
    borderRadius: 50,
    backgroundColor: COLORS.ORANGE,
    marginBottom: '7.4%',
  },
  buttonLogin: {
    width: wp(80),
    alignSelf: 'center',
    paddingVertical: '5%',
    borderRadius: 50,
    backgroundColor: COLORS.PURPLE_LIGHT,
  },
});
