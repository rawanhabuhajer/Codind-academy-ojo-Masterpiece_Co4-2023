import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "../screens/Categories";
import Checkout from "../screens/Checkout";
import Confirmed from "../screens/Confirmed";
import Contact from "../screens/Contact";
import ExpertProfile from "../screens/ExpertProfile";
import Home from "../screens/Home";
import Login from '../screens/Login';
import Register from '../screens/Register'
import Splash from "../screens/Splash";
import UserProfile from "../screens/UserProfile";
import Worker from "../screens/Worker";
import BookService from '../screens/BookService';
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const StackNavigator = () => {

  const screenOptions = {
    tabBarStyle:{
      backgroundColor:'#FFF',
      height:70,
      borderTopLeftRadius: 35,
          borderTopRightRadius: 35,  
    },
    tabBarItemStyle:{
      marginBottom:15
    },
    // tabBarShowLabel: false,
  };
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabs() {
    
    return (
      <Tab.Navigator {...{ screenOptions }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
          
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#171717" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#00E1FF" />
              ) : (
                <AntDesign name="home" size={24} color="#313131" />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={UserProfile}
          options={{
            headerShown: false,
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "#171717" },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#00E1FF" />
              ) : (
                <Ionicons name="person-outline" size={24} color="#313131" />
              ),
          }}
        />

        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            tabBarLabel: "Categories",
            tabBarLabelStyle: { color: "#171717" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="shoppingcart" size={24} color="#00E1FF" />
              ) : (
                <AntDesign name="shoppingcart" size={24} color="#313131" />
              ),
          }}
        />
        <Tab.Screen
          name="ExpertProfile"
          component={ExpertProfile}
          options={{
            tabBarLabel: "ExpertProfile",
            tabBarLabelStyle: { color: "#171717" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="user" size={24} color="#00E1FF" />
              ) : (
                <AntDesign name="user" size={24} color="#313131" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
    <Stack.Navigator >
      
      <Stack.Screen
          name="BookService"
          component={BookService}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="Categories"
          component={Categories}
          options={{ headerShown: false }}
        />
    <Stack.Screen
        name="Worker"
        component={Worker}
        options={{ headerShown: false }}
      />
    <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
    <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ headerShown: false }}
      />
 
      <Stack.Screen
        name="ExpertProfile"
        component={ExpertProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      

  
 
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default StackNavigator