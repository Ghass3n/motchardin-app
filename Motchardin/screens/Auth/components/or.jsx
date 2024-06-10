import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../../constants/colors";

const OrDivider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>Or</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.textgray,
  },
  text: {
    marginHorizontal: 10,
    color: colors.textgray,
    fontSize: 16,
  },
});

export default OrDivider;
