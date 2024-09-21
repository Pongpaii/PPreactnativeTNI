// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostScreen from "./screens/CreatePostScreen";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MenuScreen from "./screens/MenuScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen";
import Toast from "react-native-toast-message";

//create stack and drawer
const Drawer = createDrawerNavigator();
const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

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

function ProdstackSc() {
  return (
    <ProductStack.Navigator
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
      initialRouteName="Products"
    >
      {/*  แต่ละหน้า*/}
      <ProductStack.Screen name="Home" component={ProductScreen} />

      <ProductStack.Screen
        name="Products"
        component={ProductScreen}
        options={{
          headerTitleAlign: "center",

          headerTintColor: "white",
        }}
      />
      <ProductStack.Screen name="Details" component={DetailScreen} />
    </ProductStack.Navigator>
  );
}

function LoginstackSc() {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
      initialRouteName="Login"
    >
      {/*  แต่ละหน้า*/}
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}

export default function App(): React.JSX.Element {
  //create ตัวแปร
  const [isLogin] = useState(false);
  return (
  <>
  
  <SafeAreaProvider>
      <NavigationContainer>
        <HeaderButtonsProvider stackType="native">
          {isLogin ? (
            <Drawer.Navigator
              screenOptions={{ headerShown: false }}
              drawerContent={(props) => <MenuScreen {...props} />}
            >
              <Drawer.Screen
                name="HomeStack"
                component={HomestackSc}
              ></Drawer.Screen>
              <Drawer.Screen
                name="ProductStack"
                component={ProdstackSc}
              ></Drawer.Screen>
            </Drawer.Navigator>
          ) : (
            <LoginstackSc />
          )}
        </HeaderButtonsProvider>
      </NavigationContainer>
    </SafeAreaProvider>
    <Toast/>
  </>
  );
}

const styles = StyleSheet.create({});
