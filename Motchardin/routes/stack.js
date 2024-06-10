import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";

import LogIn from "../screens/Auth/LogInScreen/Screens/login";

const stack = createStackNavigator();
export default function Homestack() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="LogInScreen"
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <stack.Screen
          name="LogInScreen"
          component={LogIn}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
