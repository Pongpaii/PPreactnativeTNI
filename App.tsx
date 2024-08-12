import { View, Text } from "react-native";
import React from "react";
import ProfileScreen from "./components/ProfileScreen";
import UseEffectEx from "./components/UseEffectEx";
import FlatlistExample from "./components/FlatlistExample";
import FlatListcallBackend from "./components/FlatListcallBackend";

const App = (): React.JSX.Element => {
  return (
    <View>
      
        <FlatlistExample/>
        <FlatListcallBackend/>
    </View>
  );
};


export default App;
