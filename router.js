import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import PostScreen from "./Screens/mainScreens/PostsScreen";
import CreatePostScreen from "./Screens/mainScreens/CreatePostsScreen";
import ProfileScreen from "./Screens/mainScreens/ProfileScreen";

//icons import
import { Feather, Ionicons } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={{
        tabBarActiveTintColor: "#FF6C00",
        tabBarStyle: [
          {
            display: "flex",
            height: 83,
          },
          null,
        ],
      }}
    >
      <MainTab.Screen
        options={{
          headerStyle: {
            backgroundColor: "#FFFFFF",
          },

          headerTitle: "Публикации",
          headerTitleStyle: {
            fontSize: 17,
            lineHeight: 22,
            marginLeft: 140,
            textAlign: "center",
            fontWeight: "500",
          },
          headerRight: () => (
            <Ionicons
              style={{ marginRight: 10 }}
              onPress={() => alert("Logout")}
              name="exit-outline"
              size={24}
              color="#BDBDBD"
            />
          ),

          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={size} color={color} />
          ),
        }}
        name="Post"
        component={PostScreen}
      />
      <MainTab.Screen
        options={{
          headerStyle: {
            backgroundColor: "#FFFFFF",
          },
          headerTitle: "Создать публикацию",
          headerTitleStyle: {
            fontSize: 17,
            lineHeight: 22,
            marginLeft: 103,
            textAlign: "center",
            fontWeight: "500",
          },
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="plus" size={size} color={color} />
          ),
          //   headerShown: false,
        }}
        name="Create"
        component={CreatePostScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
          headerShown: false,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
