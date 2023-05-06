import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SignIn from './screens/SignIn';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen name="Signin" component={SignIn} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
