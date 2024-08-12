import { View, Text } from "react-native";
import React from "react";
import ProfileScreen from "./components/ProfileScreen";
import UseEffectEx from "./components/UseEffectEx";
import FlatlistExample from "./components/FlatlistExample";
import FlatListcallBackend from "./components/FlatListcallBackend";
import { StatusBar } from "expo-status-bar";
import NewsApp from "./components/NewsApp";

const App = (): React.JSX.Element => {
  return (
    <View>
      
       <NewsApp/>
       <StatusBar style="auto"/>
    </View>
  );
};


export default App;
