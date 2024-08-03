import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import { styles } from "../styles/styles";
import { stylesPractice } from "../styles/styles";
import { useState, useEffect } from "react";

const Login = () => {
  return (
    <View style={styles.container}>
     <View style={styles.LoginContainer}>
        <TextInput style={stylesPractice.logininput} placeholder="Enter Name" />
        <TextInput style={stylesPractice.logininput} placeholder="Enter Email"/>
        <Button title="SUBMIT"></Button>
    </View>
    </View>
  );
};

export default Login;
