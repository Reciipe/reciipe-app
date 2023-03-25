import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomePage from "./src/screens/intro/CreatorIntroScreen";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { loadFonts } from "./src/assets/fonts/font";
import { Provider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";
import store from "./src/redux/store";

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}
