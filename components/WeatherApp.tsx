import { StyleSheet, Text, View, Alert, Modal, Pressable } from "react-native";
import React from "react";
import { useState } from "react";
import WeatherLondon from "./WeatherLondon";
import WeatherBKK from "./WeatherBKK";

const WeatherApp = ():React.JSX.Element => {

     //setstate modalVisible,setModalvisible set false = default  | false = no show pop up
  const [modalVisible, setModalvisible] = useState(false); 

    const[selectedCity,setSelectedCity]=useState('');


    //create set selectedCITY
    const toggleModal = (city:string)=>{
        setSelectedCity(city);
        setModalvisible(true)
    }

    const renderWeatherComponent = ()=>{
        if (selectedCity =='London'){
            return<WeatherLondon/>;
        }
        else if (selectedCity =='BKK'){
            return<WeatherBKK/>;
        }
        return null;
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WeatherApp</Text>



      <Pressable
        style={[styles.button, styles.button]}
        onPress={() => {setModalvisible(true),setSelectedCity('London');}}
      >
        <Text style={styles.buttonText}>London</Text>

      </Pressable>
       
      <Pressable
        style={[styles.button, styles.button]}
        onPress={() => {setModalvisible(true),setSelectedCity('BKK');}}
      >
        <Text style={styles.buttonText} >BKK</Text>
      </Pressable>


       <Modal  animationType="slide"
        transparent={true}
        visible={modalVisible}>


            <View style={styles.modalBackground}> 
          <View style={styles.modalContainer}>
          {renderWeatherComponent()}
          <Pressable
            style={[styles.button, styles.closeButton]}
            onPress={() => setModalvisible(!modalVisible)}
          >{/*ปุ่มกดปิด*/}
            <Text style={styles.closeButtonText}>Close</Text>
          </Pressable>
          </View>
        </View>
        </Modal>
        






    </View>
  );
};

export default WeatherApp;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    backgroundColor: "#3AA6B9",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#f9f9f9",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
