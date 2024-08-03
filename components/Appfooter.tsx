import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { stylesPractice } from "../styles/styles";
type AppFooterProps = {
  footerMessage: string;
};
const Appfooter = ({footerMessage}:AppFooterProps): React.JSX.Element => {

    //uxui
  return (
    <View style={stylesPractice.footer}>
  
    <Text style={stylesPractice.footerText}>{footerMessage} </Text>

    </View>
  );
};

export default Appfooter;
