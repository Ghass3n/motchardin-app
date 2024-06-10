import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../../../constants/colors";
import Input from "../../components/input";
import Forgotpassword from "../../components/forgotpassword";
import Bluebutton from "../../components/bluebutton";
import OrDivider from "../../components/or";
import Signupwith from "../../components/signupwith";
import Navtosignup from "../../components/navtosignup";
import { facebook, google } from "../../../../constants/images";
import ErrorModal from "../../components/modal";
export default function LogIn({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const handlePress = () => {
    if (isValidEmail(logindata.email) && logindata.password) {
      console.log("good");
    } else {
      setModalVisible(true);
    }
  };
  // TODO: fix this
  // const loginWithFacebook = async () => {
  //   try {
  //     await Facebook.initializeAsync({
  //       appId: "454992393807015",
  //     });
  //     const { type, token } = await Facebook.logInWithReadPermissionsAsync({
  //       permissions: ["public_profile", "email"],
  //     });
  //     if (type === "success") {
  //       // Get user info using token
  //       const response = await fetch(
  //         `https://graph.facebook.com/me?access_token=${token}`
  //       );
  //       const userData = await response.json();
  //       console.log(userData);
  //     }
  //   } catch (error) {
  //     console.error("Facebook login error:", error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Login to Motchardin</Text>
      <Input
        label="Email"
        holder="Enter your email"
        secure={false}
        setLoginData={setlogindata}
      />
      <Input
        label="Password"
        holder="Enter your password"
        secure={true}
        setLoginData={setlogindata}
      />
      <Forgotpassword navigation={navigation} />
      <Bluebutton text={"Login"} handlePress={handlePress} />
      <OrDivider />
      <Signupwith
        text={"Google"}
        image={google}
        handlePress={() => {
          console.log("google");
        }}
      />
      <Signupwith
        text={"Facebook"}
        image={facebook}
        handlePress={() => {
          console.log("facebook");
        }}
      />
      <Navtosignup navigation={navigation} />
      <ErrorModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.mainblack,
    paddingHorizontal: 20,
  },
  topText: {
    fontSize: 24,
    color: colors.white,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
