import React, {useEffect, useState} from "react";
import {View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {AuthStackNavigator} from "./src/Navigation/AuthNavigators/AuthNavigator";
import {HomeStackNavigator} from "./src/Navigation/HomeNavigators/HomeNavigator";
import {Observer} from "mobx-react";
import {BottomTab} from "./src/Navigation/BottomTabNavigator/BottomTabNavigator";
import Store from "./src/Store/Store";
import {FocusAwareStatusBar, getData} from "./src/Functions/AppFunctions";
import {Loader} from "./src/Components/Components";

function App() {
    const [loading, setLoading] = useState(true);
    async function initPageLoadingEvents() {
        const authState = await getData("authState");

        const mechId = await getData("mechID");
        const mechData = await getData("mechData");
        let mech_data = JSON.parse(mechData);

        if (authState) {
            Store.setMechIdVal(mechId);
            Store.setRegUserDetails(mech_data);

            setLoading(false);
            Store.setAuthTokenVal(1);
        } else {
            setLoading(false);
        }
    }

    useEffect(() => {
        initPageLoadingEvents();
    }, []);

    return loading ? (
        <>
            <Loader />
        </>
    ) : (
        <Observer>
            {() => (
                <NavigationContainer>
                    {Store.authTokenVal == 0 ? <AuthStackNavigator /> : <BottomTab />}
                </NavigationContainer>
            )}
        </Observer>
    );
}

export default App;
