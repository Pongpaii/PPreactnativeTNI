import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import NewsStyle from "../styles/NewsStyle";

//OPENWEATHERMAP="98949e0c69f964226f26328282039a79"

//create array
interface news {
  title: string;
  publishedAt: string;
  description: string;
  url: string;
}

const NewsApp = () => {
  const API_KEY = "73500397efe24613a3bd821c627f5b55"; //news api
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  const [News, setNews] = useState<news[]>([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch(URL) //get data by use effect
      .then((response) => response.json())
      .then((News) => {
        setNews(News.articles);
        setloading(false);
      })
      .catch((error) => {
        console.error("Error fatching the news:", error);
        setloading(false);
      });
  }, []);

  const _renderItem = ({ item }: { item: news }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.headline}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.date}>
        {new Date(item.publishedAt).toLocaleDateString()}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={News}
          renderItem={_renderItem}
          keyExtractor={(item) => item.url}
        />
      )}
    </View>
  );
};

export default NewsApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  card: {
    backgroundColor: "#90EE90",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  headline: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
});
