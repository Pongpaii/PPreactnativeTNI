import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CreatePostScreen = ({ navigation, route }: any): React.JSX.Element => {
  const [postText, setpostText] = React.useState("");

  return (
    <>
      <TextInput
        multiline
        placeholder="Tell smth"
        style={{ height: 200, padding: 10, backgroundColor: "white " }}
        value={postText}
        onChangeText={setpostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate({
            name: "Home",
            params: { post: postText },
          });
        }}
      ></Button>
    </>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({});
