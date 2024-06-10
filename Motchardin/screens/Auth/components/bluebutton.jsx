import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import colors from "../../../constants/colors";

const Bluebutton = ({ text, handlePress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress} // Corrected this line
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Bluebutton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.actualblue,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});
