import React, { createContext } from 'react';
import { Dimensions, ToastAndroid, PixelRatio, Alert } from 'react-native';

export const width = Dimensions.get("screen").width
export const height = Dimensions.get("screen").height


export const showNotification = str => {
    if (Platform.OS == "android") {
        ToastAndroid.show(str, ToastAndroid.LONG);
    }
    if (Platform.OS == "ios") {
        Alert.alert(str);
    }
};
