import { View} from "react-native";
import React from "react";
import AxiosGetData from "./components/AxiosGetData";
import AxiosPostData from "./components/AxiosPostData";
import WeatherLondon from "./components/WeatherLondon";
import WeatherBKK from "./components/WeatherBKK";

const App = (): React.JSX.Element => {
  return (
    <View>
       {/* <AxiosGetData/> */}
       {/* <AxiosPostData/> */}
     {/* <WeatherLondon/> */}
     <WeatherBKK/>
    </View>
  );
};


export default App;
