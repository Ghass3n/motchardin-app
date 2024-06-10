import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import colors from "../../../constants/colors";

export default function Input({ label, holder, secure, setLoginData }) {
  const handleTextChange = (text) => {
    if (label === "Email") {
      setLoginData((prevData) => ({
        ...prevData,
        email: text,
      }));
    } else {
      setLoginData((prevData) => ({
        ...prevData,
        password: text,
      }));
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={holder}
          placeholderTextColor={colors.textgray}
          secureTextEntry={secure}
          onChangeText={(text) => handleTextChange(text)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    width: "100%",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2,
  },
  textInputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: "100%",
    borderColor: colors.white,
    alignSelf: "center",
  },
  textInput: {
    color: colors.textgray,
    padding: 10,
    paddingLeft: 15,
    height: "100%",
    fontSize: 16,
    fontWeight: "medium",
  },
});
