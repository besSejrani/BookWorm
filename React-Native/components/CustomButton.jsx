import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

/**
 * Get position from props and renders the button
 */
const getPosition = position => {
  switch (position) {
    case "right":
      return { position: "absolute", right: 20, bottom: 20 };
    default:
      return { position: "absolute", left: 20, bottom: 20 };
  }
};

/**
 * Render CustomActionButton Component
 */
const CustomActionButton = ({ children, onPress, style, position }) => {
  const floatingActionButton = position ? getPosition(position) : [];

  return (
    <TouchableOpacity style={floatingActionButton} onPress={onPress}>
      <View style={[styles.button, style]}>{children}</View>
    </TouchableOpacity>
  );
};

export default CustomActionButton;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#deada5",
    alignItems: "center",
    justifyContent: "center"
  }
});
