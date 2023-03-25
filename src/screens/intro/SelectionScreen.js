import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import WelcomeImg from "../../assets/images/SelectionPage.svg";

export default function SelectionScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <WelcomeImg width="150%" style={styles.WelcomeImg} />
      </View>
      <Text style={{ fontSize: 30, color: "black" }}>Who are You?</Text>
      <StatusBar style="auto" />
      <View style={styles.space} />
      <View style={styles.screenContainer}>
        <AppButton title="Foodie" size="sm" backgroundColor="#FFFFFF" />
        <View style={styles.space} />
        <AppButton title="Creator" size="sm" backgroundColor="black" />
      </View>
    </View>
  );
}
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  //button container properties
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#AE394D",
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 5,
    width: 179,
    height: 50,
  },

  //space between each item
  space: {
    width: 100,
    height: 50,
  },

  //button text properties
  appButtonText: {
    fontSize: 20,
    color: "#000000",
    alignSelf: "center",
    lineHeight: 19,
  },
});
