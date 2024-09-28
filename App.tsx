// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
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
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";
import { useAppSelector, useAppDispatch } from "./redux-toolkit/hooks";
import {
  selectAuthstate,
  setislogin,
  setisloading,
  setprofile,
} from "./auth/auth-slice";
import { getpf } from "./services/Auth-service";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CameraScreen from "./screens/CameraScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
 
//create stack and drawer
const Drawer = createDrawerNavigator();
const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const CameraStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
function TabContainer() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName=""
          if (route.name === "HomeStack") {
            iconName = focused
              ? "home"
              : "home-outline";
          } else if (route.name === "CameraStack") {
            iconName = focused ? "camera" : "camera-outline";
          }
          // You can return any component that you like here!​
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown:false,
        tabBarActiveBackgroundColor:'lightblue'
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomestackSc}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="CameraStack"
        component={CameraStackScreen}
        options={{ tabBarLabel: "กล้อง" }}
      />
    </Tab.Navigator>
  );
}

function CameraStackScreen() {
  return (
    <CameraStack.Navigator
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
      initialRouteName="Camera"
    >
      {/*  แต่ละหน้า*/}
      <CameraStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ title: "Camera" }}
      />
    </CameraStack.Navigator>
  );
}

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

const App = (): React.JSX.Element => {
  //use appselector for pull state from store
  //create ตัวแปร
  const { islogin, isLoading } = useAppSelector(selectAuthstate);
  const dispatch = useAppDispatch();
  const checklogin = async () => {
    try {
      dispatch(setisloading(true));
      const response = await getpf();
      if (response?.status === 200) {
        dispatch(setprofile(response.data.data.user));
        dispatch(setislogin(true));
      } else {
        dispatch(setislogin(false));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setisloading(false));
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      checklogin();
    }, [])
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  return (
    <>
      <HeaderButtonsProvider stackType="native">
        {islogin ? (
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="Home" component={TabContainer}></Drawer.Screen>
            <Drawer.Screen
              name="ProductStack"
              component={ProdstackSc}
            ></Drawer.Screen>
          </Drawer.Navigator>
        ) : (
          <LoginstackSc />
        )}
      </HeaderButtonsProvider>

      <Toast />
    </>
  );
};

const styles = StyleSheet.create({});
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
export default AppWrapper;
