import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({text, action}) {
    return (
        <TouchableOpacity style={styles.button} onPress={action}>
                <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        height: 50,
        width: 250,
        top: 690,
        left: 64,
        backgroundColor: "#AE394D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 11
    },
    buttonText: {
        color: "white",
        fontWeight: 700,
        fontSize: 15,
    }
});