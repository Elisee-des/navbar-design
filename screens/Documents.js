import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Documents() {
  return (
    <View style={styles.container}>
      <Text>Document</Text>
    </View>
  );
}
export default Documents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
