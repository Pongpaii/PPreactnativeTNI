import { StyleSheet, Text, View, Alert, Modal, Pressable } from "react-native";
import React from "react";
import { useState } from "react";

const ModalEx = (): React.JSX.Element => {
  //setstate modalVisible,setModalvisible set false = default  | false = no show pop up
  const [modalVisible, setModalvisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      {/* ใช้2style    | ถ้ากด set modal visible -> true */}
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalvisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
      {/* VISIBLE ใช้ค่าจาก setstate ModalVisible */}
      
      {/* ปุ่มกดเพื่อ pop upขึ้น */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalvisible(!modalVisible)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello React Native</Text>

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalvisible(!modalVisible)}
          >{/*ปุ่มกดปิด*/}
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default ModalEx;
const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  modalView: {
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
