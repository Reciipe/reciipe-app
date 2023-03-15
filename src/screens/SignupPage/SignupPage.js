import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import SignupForm from "./SignupForm";
import SignupImg from './images/SignupImg.svg';

export default function SignupPage() {

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <SignupImg style={styles.welcomeImg} />
                </View>

                <Text style={styles.header} >Create An Account</Text>

                <SignupForm />
            
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFFFFF",
    },
    imgContainer:{
        width: "100%",
        display: "flex",
        alignItems: "center",
    },
    welcomeImg: {
        width: "100%",
        height: "100%",
    },
    header: {
        fontSize: 20,
        fontWeight: 700,
        textAlign: "center",
        marginTop: 5,
        marginBottom: 10,
    }
});