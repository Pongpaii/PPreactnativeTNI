import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostScreen from "./screens/CreatePostScreen";


export default function App(): React.JSX.Element {
  //create ตัวแปร
  const HomeStack = createNativeStackNavigator();

  return (
    <NavigationContainer>

       {/*  หัวใจหลักของtitle bar  GLOBAL*/}

      <HomeStack.Navigator
      screenOptions={{headerStyle:{backgroundColor:'#20b2aa'},
      headerTintColor:'white',
      headerTitleStyle:{fontWeight:'bold'},
  }}
      initialRouteName='Home'>



       {/*  แต่ละหน้า*/}
        <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{title:'หน้าหลัก'}}/>



        <HomeStack.Screen 
        name="About" 
        component={AboutScreen} 
        options={{ headerTitleAlign:"center"}}
        /* options={
          {
            title:'เกี่ยวกับเรา',
            headerStyle:{backgroundColor:'#20b2aa'},
            headerTintColor:'white',
            headerTitleStyle:{fontWeight:'bold'},
            headerTitleAlign:"center"


          }}
           */
          />


        <HomeStack.Screen name="CreatePost" component={CreatePostScreen} />



      </HomeStack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({

  
});
