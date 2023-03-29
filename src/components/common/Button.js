import { StyleSheet, Text, TouchableOpacity, Platform } from "react-native";

export default function Button({ text, action, style, textColor }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={action}>
      <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 250,
    maxWidth: 350,
    backgroundColor: "#AE394D",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 11,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  buttonText: {
    color: "white",
    fontWeight: 700,
    fontSize: 17,
    fontFamily: "Quicksand-Bold",
  },
});
