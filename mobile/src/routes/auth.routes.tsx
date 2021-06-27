import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import AppoimentDetails from '../screens/AppoimentDetails';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => {
    return (
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'transparent'
                }
            }}
        >
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="Home"
                component={Home}
            />
            
            <Screen
                name="AppoimentDetails"
                component={AppoimentDetails}
            />

            
        </Navigator>
    )
}

export default AuthRoutes;