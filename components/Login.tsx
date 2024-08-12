import { View, Text, TextInput, Button, Alert } from "react-native";
import React from "react";
import { styles } from "../styles/styles";
import { stylesPractice } from "../styles/styles";
import { useState, useEffect } from "react";

const Login = (): React.JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email: string): boolean => {
    const recheckEmail = /\S+@\S+\.\S+/; 
    //regex for search and detect (text) /S+ =text that dont have spacebar @ = check @ and .  ex. p@g.c

    return recheckEmail.test(email);
  };

  //---------------------------------------------
  const handleSubmit = () => {
    let errorMessage = "";
    if (!name) {
      errorMessage += "Please Enter Name\n"; //didn't fill name
    }

    if (!email) {
      errorMessage += "Please Enter Email\n"; //didn't fill email
    } else if (!validateEmail(email)) {
      errorMessage += "Invalid Email Format\n"; //fake email
    }

    if (!password) {
      errorMessage += "Please Enter Password\n"; //didn't fill pass
    } else if (password.length < 6) {
      errorMessage += "Password must be 6 characters\n"; //fake email
    }
    //abt error msg
    if (errorMessage) {
      Alert.alert("Error", errorMessage.trim(), [{ text: "OK" }]);
      return;
    }
    Alert.alert("Alert", "Success", [{ text: "OK" }]);
  };

  //---------------------------------------------

  const onCLickMe = () => {
    Alert.alert("Alert!", `Hello ${name}`);
  };

  return (
    <View style={styles.LoginContainer}>
      <TextInput
        style={stylesPractice.logininput}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={stylesPractice.logininput}
        placeholder="Enter Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={stylesPractice.logininput}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Button title="SUBMIT" onPress={handleSubmit}></Button>
    </View>
  );
};

export default Login;
