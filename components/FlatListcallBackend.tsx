import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}
const FlatListcallBackend = (): React.JSX.Element => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") //get api from url
      .then((response) => response.json()) // covert to .json
      .then((data) => { //json turn into data
        setData(data);// update state user
        setLoading(false);// let user know load finish
      })
      //handling error if there's an error will come to .catch
      .catch((error) => {
        console.error(error);//show what error
        setLoading(false);//let user know it finish even it error
      });
  }, []);

  const renderItem = ({ item }: { item: User }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default FlatListcallBackend;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});
