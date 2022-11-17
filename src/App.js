import React from "react";
import { StyleSheet, Text, View } from "react-native";

function App() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 30,
  },
});

export default App;
