import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LandingScreen from '../screens/LandingScreen';
import AboutScreen from '../screens/AboutScreen';
import LoginRegisterScreen from '../screens/LoginRegisterScreen';
import ProfileSetupScreen from '../screens/ProfileSetupScreen';
import CreditCheckScreen from '../screens/CreditCheckScreen';
import CreateLoanRequestScreen from '../screens/CreateLoanRequestScreen';
import LoanStatusScreen from '../screens/LoanStatusScreen';
import AgreementsScreen from '../screens/AgreementsScreen';
import RepaymentDashboardScreen from '../screens/RepaymentDashboardScreen';
import LenderBrowseScreen from '../screens/LenderBrowseScreen';
import FundLoanScreen from '../screens/FundLoanScreen';
import PortfolioDashboardScreen from '../screens/PortfolioDashboardScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LoanStatusScreen} />
      <Tab.Screen name="Browse" component={LenderBrowseScreen} />
      <Tab.Screen name="Create" component={CreateLoanRequestScreen} />
      <Tab.Screen name="Wallet" component={RepaymentDashboardScreen} />
      <Tab.Screen name="Profile" component={ProfileSetupScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="LoginRegister" component={LoginRegisterScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        {/* Remove duplicate tab screens from stack */}
        <Stack.Screen name="CreditCheck" component={CreditCheckScreen} />
        <Stack.Screen name="LoanStatus" component={LoanStatusScreen} />
        <Stack.Screen name="Agreements" component={AgreementsScreen} />
        <Stack.Screen name="FundLoan" component={FundLoanScreen} />
        <Stack.Screen name="PortfolioDashboard" component={PortfolioDashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
    </NavigationContainer>
  );
}
