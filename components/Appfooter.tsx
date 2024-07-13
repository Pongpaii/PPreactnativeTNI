import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Appfooter = (): React.JSX.Element => {

    //uxui
  return (
    <View style={styles.footer}>
  
    <Text style={styles.footerText}>Thai-Nichi InstiTude of Technology</Text>

    </View>
  );
};

export default Appfooter;

const styles = StyleSheet.create({
    footer: {
    backgroundColor: '#f8f8f8',
    padding: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    left: 0,
    right: 0,
    bottom: 0,
    },
    footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    },
    });
    