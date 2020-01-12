import React from "react";
import { View, Text } from "react-native";

/**
 * Render BookCount Component
 */
const BookCount = ({ title, count = 50 }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>{title}</Text>
      <Text>{count}</Text>
    </View>
  );
};

export default BookCount;
