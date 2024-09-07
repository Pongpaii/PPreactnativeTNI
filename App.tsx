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
import MenuScreen from "./screens/MenuScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProductScreen from "./screens/ProductScreen";

//create stack and drawer
const Drawer = createDrawerNavigator();
const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();

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
      <ProductStack.Screen
        name="Home"
        component={ProductScreen}

      />

      <ProductStack.Screen
        name="Products"
        component={ProductScreen}
        options={{
          headerTitleAlign: "center",
  
          headerTintColor: "white",
        }}
      />
    </ProductStack.Navigator>
  );
}


export default function App(): React.JSX.Element {
  //create ตัวแปร

  return (
    <SafeAreaProvider>
      <HeaderButtonsProvider stackType="native">
        <NavigationContainer>
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
        </NavigationContainer>
      </HeaderButtonsProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
