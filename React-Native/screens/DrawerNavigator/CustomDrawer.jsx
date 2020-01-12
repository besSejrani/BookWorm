import React from "react";
import { View, Text, ScrollView, SafeAreaView, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
//import { SafeAreaView } from 'react-navigation'
import { DrawerItems } from "react-navigation-drawer";

const CustomDrawer = props => {
  return (
    <ScrollView>
      <SafeAreaView style={{ backgroundColor: "#2e424d" }} />
      <View style={{ height: 200, backgroundColor: "#2e424d", alignItems: "center", justifyContent: "center" }}>
        <Ionicons name="ios-bookmarks" size={100} color="#bada55" />
        <Text
          style={{ color: "white", fontSize: 24, paddingTop: Platform.OS === "android" ? 20 : 0, fontWeight: "100" }}
        >
          Book Worm
        </Text>
      </View>
      <DrawerItems {...props} />
    </ScrollView>
  );
};

export default CustomDrawer;
