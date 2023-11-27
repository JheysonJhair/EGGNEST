import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from '../components/common/LoadingScreen';
import Login from '../components/auth/Login';
import MainScreen from '../components/main/Main';
import ReportScreen from '../components/main/Reporte';
import Admin from '../components/main/Admin';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Loading" component={LoadingScreen} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Admin" component={Admin} />
    <Stack.Screen name="Main" component={MainScreen} />
    <Stack.Screen
      name="Report"
      component={ReportScreen}
      options={{
        headerShown: true,
        title: '', 
      }}
    />
  </Stack.Navigator>
</NavigationContainer>

  );
};

export default AppNavigator;
