import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import colors from "../../../constants/colors";

const Navtosignup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Don't have an account yet?</Text>
      <TouchableOpacity style={styles.textContainer}>
        <Text style={styles.text1}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navtosignup;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
  text: {
    fontSize: 16,
    color: colors.white,
  },
  text1: {
    fontSize: 16,
    color: colors.teal,
    textDecorationLine: "underline",
  },
});
