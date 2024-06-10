import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";
import colors from "../../../constants/colors";

export default function Forgotpassword({ navigation }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.forgotpassword}>Forgot Password</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
  },
  forgotpassword: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.teal,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },
});
