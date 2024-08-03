import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native"; //import component

//import style that I create in my folder (appgooter)
import Appfooter from "./components/Appfooter";

//import app header
import Appheader from "./components/Appheader";

//import content
import Content from "./components/Content";
import { stylesPractice } from "./styles/styles";
import { useEffect, useState } from "react";

export default function App(): React.JSX.Element {
  //sete state func
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("Message from App.tsx");
  const [footerMessage, setFootermessage] = useState(
    "Thai Nichi Institude of Technology"
  );

  //use effect
  useEffect(() => {
    console.log("component has mounted");
  }, []);
  useEffect(() => {
    console.log(`FullName has Changed to : ${fullname}`);
  }, [fullname]); //show log when full name change

  //create function to send this function to the contentinthe line44
  const handleButtonClick=()=>{
    Alert.alert("Hello", `Input your fullname : ${fullname}`);
  };



  //uxui
  return (
    <View style={stylesPractice.container}>
      <Appheader fullname={fullname} message={message} />
      {/* <Content message={message} fullname={fullname} /> */}
      <Content message={message} onButtonClick={handleButtonClick} />
      <TextInput
        style={stylesPractice.input}
        placeholder="Enter your full name"
        value={fullname}
        onChangeText={setFullname}
      />
      <Appfooter footerMessage={footerMessage} />
    </View>
  );
}
