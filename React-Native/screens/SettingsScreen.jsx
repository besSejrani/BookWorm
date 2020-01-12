import React from "react";
import { View, Text } from "react-native";
import CustomActionButton from "../components/CustomButton";
import firebase from "firebase/app";
import "firebase/auth";

const SignUpScreen = ({ navigation }) => {
  /**
   * Logs out Firebase user
   */
  const signOut = async () => {
    await firebase.auth().signOut();
    await navigation.navigate("WelcomeScreen");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#2e424d" }}>
      <CustomActionButton
        title="Signup"
        onPress={() => signOut()}
        style={{ width: 200, backgroundColor: "transparent", borderColor: "#bada55", borderWidth: 2 }}
      >
        <Text style={{ color: "white" }}>Logout</Text>
      </CustomActionButton>
    </View>
  );
};

export default SignUpScreen;
