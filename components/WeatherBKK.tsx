import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";



//interface for all state  other way to create state
interface WeatherState {
  data: any;
  loading: boolean;
  error: string | null;
  CurrentDate : Date|null;
}

  //create function date
  const formatdate = (date : Date | null): string =>{
    if(!date) return '';
    const option :Intl.DateTimeFormatOptions={year:'numeric',month:'long' ,day:'numeric'};
    return date.toLocaleDateString('th-TH',option);
  }



const WeatherBKK = (): React.JSX.Element => {
  //อ้างอิง<WeatherState></WeatherState> {ค่าเริ้มต้น  {}}
  const [state, setState] = useState<WeatherState>({
    data: null,
    loading: true,
    error: null,
    CurrentDate: new Date(),
  });
  const fetchweaterdata = async () => {
    const API_KEY = "d78aaab2d84844433d115114fb3bb62e";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=${API_KEY}&units=metric&lang=th`;

    try {
      const response = await axios.get(URL);
      setState({ data: response.data, loading: false, error: null ,CurrentDate:new Date()});


    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: "Failed to fetch weather data",
        CurrentDate:null,


      });
    }

    
  };

  useEffect(() => {
    fetchweaterdata();
  }, []);

  //ถ้าตัวสoadingทำงานให้้ return
  if (state.loading) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  }

  if (state.error) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.errorText}>{state.error}</Text>
      </View>
    );
  }



  return (
    <View style={styles.container}>
      <Text> {formatdate(state.CurrentDate)}</Text>
      <Text style={styles.cityName}>{state.data.name}</Text>
      <Text style={styles.temp}>{state.data.main.temp}</Text>
      <Text style={styles.weatherMain}>{state.data.weather[0].main}</Text>
      <Text style={styles.weatherDescription}>
        {state.data.weather[0].description}
      </Text>
      <FlatList
        data={[
          { key: "รู้สึกเหมือน ", value: ` ${state.data.main.feels_like} C` },
          { key: "อุณหภูมิต่ำสุด", value: ` ${state.data.main.temp_min} C` },
          { key: "อุณหภูมิสูงสุด ", value: ` ${state.data.main.temp_max} C` },
          { key: "ความชื้น", value: ` ${state.data.main.humidity} %` },
          { key: "ความดันอากาศ ", value: ` ${state.data.main.pressure} hPa` },
        ]}
        renderItem={({ item }) => (
          <View style={styles.detailContainer}>
            <Text style={styles.detailKey}>{item.key}</Text>
            <Text style={styles.detailValue}>{item.value}</Text>
          </View>
        )}
      />
      </View>
      
 
  );
};

export default WeatherBKK;










const styles = StyleSheet.create({
  container2: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#efebcd",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fffded",
  },
  centeredContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  cityName: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  temp: {
    fontSize: 64,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#ff6347",
  },
  weatherMain: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  weatherDescription: {
    fontSize: 20,
    fontStyle: "italic",
    marginBottom: 16,
    color: "#666",
  },
  details: {
    marginTop: 16,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  detailKey: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  detailValue: {
    fontSize: 18,
    color: "#333",
  },
});
