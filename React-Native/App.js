import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";

import * as FirebaseBookWorm from "firebase/app";
import firebaseconfig from "./config/config";

import WelcomeScreen from "./screens/SwitchNavigator/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SettingsScreen from "./screens/SettingsScreen";
import CustomDrawer from "./screens/DrawerNavigator/CustomDrawer";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { BottomTabBar } from "react-navigation-tabs";

/**
 * AppSwitchNavigator
 *  - WelcomeScreen
 *    - LoginScreen
 *  - HomeScreen
 */
class App extends Component {
  componentDidMount = () => {
    this.initializeFirebase();
  };

  initializeFirebase = () => {
    FirebaseBookWorm.initializeApp(firebaseconfig);
  };

  render() {
    return <AppContainer />;
  }
}

const LoginStackNavigator = createStackNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreen,
      navigationOptions: {
        header: null
      }
    },
    LoginScreen: {
      screen: LoginScreen
    }
  },
  {
    mode: "modal",
    defaultNavigationOptions: {
      headerTitleAlign: "center",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#2e424d"
      }
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home",
        drawerIcon: () => <Ionicons name="ios-home" size={24} />
      }
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: {
        title: "Settings",
        drawerIcon: () => <Ionicons name="ios-settings" size={24} />
      }
    }
  },
  {
    contentComponent: CustomDrawer
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  LoginStackNavigator,
  AppDrawerNavigator
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
