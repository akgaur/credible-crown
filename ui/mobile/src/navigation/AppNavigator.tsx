import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LandingScreen from '../screens/LandingScreen';
import LoginRegisterScreen from '../screens/LoginRegisterScreen';
// ...import other screens as needed...

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="LoginRegister" component={LoginRegisterScreen} />
        {/* ...add other screens here... */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
