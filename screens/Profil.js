import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Profil() {
  return (
    <View style={styles.container}>
      <Text>Profil</Text>
    </View>
  );
}
export default Profil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
