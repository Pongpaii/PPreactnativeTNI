import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
import { stylesPractice } from "../styles/styles";

interface ContentProps {
  message: string;
  fullname: string;
}
const Content = ({ message, fullname }: ContentProps): React.JSX.Element => {
  const [displayFullname, setDisplayFullname] = React.useState("");
  const handleButtonClick = () => {
    setDisplayFullname(fullname);
    Alert.alert("Hello", `Input your fullname : ${fullname}`);
  };

  const onCLickMe = () => {
    Alert.alert("HELLO ", fullname);
  };
  return (
    <View style={stylesPractice.content}>
      <Text style={stylesPractice.text}>{message}</Text>
      <Text style={stylesPractice.text}>{displayFullname}</Text>
      <Button title="click me" onPress={handleButtonClick} />
    </View>
  );
};

export default Content;
