import React from "react";
import { Text, View, StyleSheet } from "react-native";

function ReseauSocial() {
  return (
    <View style={styles.container}>
      <Text>Réseau social</Text>
    </View>
  );
}
export default ReseauSocial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
