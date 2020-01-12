import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomActionButton from "../../components/CustomButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#2e424d" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Ionicons name="ios-bookmarks" size={150} color="#bada55" />
        <Text style={{ fontSize: 50, fontWeight: "100", color: "white" }}>Book Worm</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
        <CustomActionButton
          title="Login"
          onPress={() => navigation.navigate("LoginScreen")}
          style={{
            width: 200,
            marginBottom: 10,
            backgroundColor: "transparent",
            borderColor: "#bada55",
            borderWidth: 2,
            color: "white"
          }}
        >
          <Text style={{ color: "white" }}>Log In</Text>
        </CustomActionButton>
      </View>
    </View>
  );
};

export default WelcomeScreen;
