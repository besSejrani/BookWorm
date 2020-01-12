import React, { Component } from "react";
import { View, Text, TextInput, ActivityIndicator, StyleSheet } from "react-native";

import * as firebase from "firebase/app";
import "firebase/auth";

import CustomActionButton from "../components/CustomButton";

class LoginScreen extends Component {
  /**
   * Creating new state for the page.
   * - email & password state for inputs.
   * - isLoaading state for the activity indicator.
   */
  state = {
    email: "",
    password: "",
    isLoading: false
  };

  /**
   * Sign In on Firebase.
   * - When isLoading = true, the activity indicator goes away.
   */
  onSignIn = async () => {
    if (this.state.email && this.state.password) {
      this.setState({ isLoading: true });
      try {
        const response = await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

        if (response) {
          this.setState({ isLoading: false });
        }

        this.props.navigation.navigate("HomeScreen");
      } catch (error) {
        console.log(error.message);
        this.setState({ isLoading: false });
      }
    }
  };

  /**
   * Sign Up on Firebase.
   * - Invoks on the fly onSignIn() for authenticating the user.
   * - When isLoading = true, the activity indicator goes away.
   */
  onSignUp = async () => {
    if (this.state.email && this.state.password) {
      this.setState({ isLoading: true });
      try {
        const response = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);

        if (response) {
          this.setState({ isLoading: false });
          this.onSignIn(this.state.email, this.state.password);
        }

        this.props.navigation.navigate("HomeScreen");
      } catch (error) {
        console.log(error.message);
        this.setState({ isLoading: false });
      }
    }
  };

  render() {
    /**
    |--------------------------------------------------
    | ALL PAGE
    |--------------------------------------------------
    */
    return (
      <View style={{ flex: 1, backgroundColor: "#2e424d" }}>
        {this.state.isLoading ? (
          <View
            style={[
              StyleSheet.absoluteFill,
              { justifyContent: "center", alignItems: "center", zIndex: 1000, elevation: 1000 }
            ]}
          >
            <ActivityIndicator size="large" color="#bada55" />
          </View>
        ) : null}
        <View style={{ marginVertical: 50, marginHorizontal: 20 }}>
          {/**
          |--------------------------------------------------
          | INPUTS
          |--------------------------------------------------
          */}
          <TextInput
            placeholder="Email"
            placeholderTextColor="#bada55"
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
            style={{
              height: 50,
              borderBottomWidth: 1,
              borderColor: "white",
              marginBottom: 10,
              color: "#bada55",
              fontSize: 18
            }}
          ></TextInput>

          <TextInput
            placeholder="Password"
            placeholderTextColor="#bada55"
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            style={{
              height: 50,
              borderBottomWidth: 1,
              borderColor: "white",
              marginBottom: 10,
              color: "#bada55",
              fontSize: 18
            }}
          ></TextInput>
        </View>

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          {/**
            |--------------------------------------------------
            | CUSTOM BUTTON ACTIONS
            |--------------------------------------------------
            */}
          <CustomActionButton
            onPress={this.onSignIn}
            style={{
              width: 200,
              marginBottom: 10,
              backgroundColor: "transparent",
              borderColor: "#bada55",
              borderWidth: 1
            }}
          >
            <Text style={{ color: "white" }}>Login</Text>
          </CustomActionButton>

          <CustomActionButton
            onPress={this.onSignUp}
            style={{
              width: 200,
              marginBottom: 10,
              backgroundColor: "transparent",
              borderColor: "#bada55",
              borderWidth: 1
            }}
          >
            <Text style={{ color: "white" }}>Signup</Text>
          </CustomActionButton>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
