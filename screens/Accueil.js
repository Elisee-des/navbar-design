import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Accueil() {
  return (
    <View style={styles.container}>
      <Text>Accueil</Text>
    </View>
  );
}
export default Accueil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
