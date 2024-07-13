import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native"; //import component
//import style that I create in my folder (appgooter)
import Appfooter from "./components/Appfooter";

//import app header
import Appheader from "./components/Appheader";

//import content
import Content from "./components/Content";

export default function App(): React.JSX.Element {
  const name = 'PONGPAI sodsong';
    //create function that show hello
    const onCLickMe = ()=> {
      Alert.alert("HELLO ",name );
      
      
    }

    //create array obj
    const userlist = [{id:123,name:'John',},{id:456,name:'Ryan',}]

   







    //uxui
  return (
   
    <View style={styles.container}>
     <Appheader name={'PONGPAI SODSONG'}></Appheader>
      <Text>Message from App.tsx</Text>
     
<Content/>
      <Button
        title="click me"
        onPress={onCLickMe}


      />
    <Appfooter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
