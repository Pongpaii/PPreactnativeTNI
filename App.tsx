// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostScreen from "./screens/CreatePostScreen";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const HomeStack = createNativeStackNavigator();
function HomestackSc() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
      initialRouteName="Home"
    >
      {/*  แต่ละหน้า*/}
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        // options={{ title: "หน้าหลัก" }}
      />

      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#20b2aa" },
          headerTintColor: "white",
        }}
      />
    </HomeStack.Navigator>
  );
}

export default function App(): React.JSX.Element {
  //create ตัวแปร

  return (
    <HeaderButtonsProvider stackType="native">
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerShown: false}}>
          <Drawer.Screen
            name="HomeStack"
            component={HomestackSc}
          ></Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </HeaderButtonsProvider>
  );
}

const styles = StyleSheet.create({});
