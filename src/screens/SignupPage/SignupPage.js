import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import SignupForm from "./SignupForm";
import SignupImg from "./images/SignupImg.svg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// navigation.replace() //goes to a new page without having a back button

export default function SignupPage() {
  return (
    <KeyboardAwareScrollView>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <SignupImg height="100%" width="100%" style={styles.welcomeImg} />
        </View>

        <Text style={styles.header}>Create An Account</Text>

        {/* debugging purposes, can remove */}
        <Text style={styles.text}>wow</Text>

        <SignupForm />
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    height: "100%",
    paddingBottom: 30,
  },
  imgContainer: {
    width: "100%",
    minHeight: 200,
    flex: 1,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
  },
  welcomeImg: {
    width: "100%",
  },
  header: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 10,
  },
  text: {
    color: "blue",
    fontFamily: "Quicksand-Bold",
  },
});
