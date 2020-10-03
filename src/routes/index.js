import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  Dashboard,
  Companies,
  Users,
} from "../screens";

const Stack = createStackNavigator();

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Companies">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerMode: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerMode: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerMode: false,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{
          headerMode: false,
        }}
      />
      <Stack.Screen
        name="AuthLoading"
        component={AuthLoadingScreen}
        options={{
          headerMode: false,
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerMode: false,
        }}
      />
      <Stack.Screen
        name="Companies"
        component={Companies}
        options={{
          headerMode: true,
          title: "Estabelecimentos",
        }}
      />
      <Stack.Screen name="Users" component={Users} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;
