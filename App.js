import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomePage from "./src/screens/WelcomePage/WelcomePage";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import SignupPage from "./src/screens/SignupPage/SignupPage";
import SignupNavigator from "./src/navigation/SignupNavigator";
import { loadFonts } from "./src/assets/fonts/font";


export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  return <SignupNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
