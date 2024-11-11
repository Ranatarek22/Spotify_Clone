import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../screens/Welcome';
import Ready from '../screens/Ready';
import SignInOut from '../screens/SignInOut';
import SignIn from '../screens/SignIn';
import Register from '../screens/Register';
export type RootStackParamList = {
  welcome: undefined;
  ready: undefined;
  signinout: undefined;
  signin: undefined;
  register: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ready"
          component={Ready}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signinout"
          component={SignInOut}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signin"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
