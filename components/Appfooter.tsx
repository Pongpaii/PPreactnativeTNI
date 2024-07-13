import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Appfooter = (): React.JSX.Element => {
    //create constant name hello normal way
    const Hello = "hello tni footer";
    //other way 
    const hello2 = <Text>Hello JSX</Text>;
    const islogin = true; //for condition rendering

    //uxui
  return (
    <View>
        <Text style={styles.myText}>
             {Hello} Date : {new Date().toLocaleDateString()}
        </Text>
      {hello2}
        {/* if1 */}
        {islogin && <Text>Welcome Boss</Text>}
          {/* if2 */}
        {
            islogin==true 
            ? <Text>Welcome marry</Text>
            :   <Text>NO LOGIN</Text>
        }



    </View>
  );
};

export default Appfooter;

const styles = StyleSheet.create({
  myText: { color: "red" },
});
