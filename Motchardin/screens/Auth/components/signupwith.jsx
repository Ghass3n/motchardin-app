import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import colors from "../../../constants/colors";

const Signupwith = ({ text, image, handlePress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>Sign up with {text}</Text>
    </TouchableOpacity>
  );
};

export default Signupwith;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  text: {
    color: colors.teal,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  image: {
    height: 22,
    width: 22,
    marginRight: 5,
  },
});
