import { View, Text, Modal, StyleSheet } from "react-native";
import React from "react";
import colors from "../../../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";

const ErrorModal = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <MaterialIcons
            name="close"
            size={25}
            color={colors.white}
            style={{ alignSelf: "flex-end", marginTop: 5, marginRight: 10 }}
            onPress={() => setModalVisible(false)}
          />
          <Text style={styles.modalText}>Invalid Email or Password</Text>
          <Text style={styles.modalText}>Please check data and try again.</Text>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: colors.mainblack,
    borderRadius: 20,
    borderColor: colors.white,
    borderWidth: 1,
    width: 275,
    height: 120,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: colors.white,
    fontSize: 16,
    textAlignVertical: "middle",
  },
});
