import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Parametre() {
  return (
    <View style={styles.container}>
      <Text>Paramètre</Text>
    </View>
  );
}
export default Parametre;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
