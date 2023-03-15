import { Text, TextInput, View, StyleSheet,TouchableOpacity } from "react-native";

export default function WelcomeForm(){
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput placeholder='Enter Full Name' style={styles.input} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Username</Text>
                <TextInput keyboardType='email-address' autoCorrect={false} autoCapitalize='none' style={styles.input} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} />
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.line} >
                <View style={styles.greyline} />
                <Text style={styles.linetext}>or</Text>
                <View style={styles.greyline} />
            </View>

            <TouchableOpacity style={styles.googlePlaceHolder}>
                <Text style={{...styles.buttonText, color: 'black'}}>Sign In With Google</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        marginVertical: 8,
        marginHorizontal: 'auto',
        
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
    },
    label:{
        fontSize: 15,
        fontWeight: 500,
        marginBottom: 9,
    },
    input: {
        padding: 6,
        borderRadius: 4,
        fontSize: 18,
        borderColor: '#DBD5D5',
        borderWidth: 1,
    },
    button: {
        height: 50,
        width: "80%",
        maxWidth: 400,
        backgroundColor: "#AE394D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 11,
        marginBottom: 5,
        marginTop: 50,
    },
    buttonText: {
        color: "white",
        fontWeight: 700,
        fontSize: 15,
    },
    line:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: "80%",
    },
    linetext:{
        textAlign: 'center',
        width: 25,
        color: "#0000008A",
    },
    greyline: {
        flex:1,
        height: 1,
        backgroundColor: '#DBD5D5',
    },
    googlePlaceHolder:{
        height: 50,
        width: "80%",
        maxWidth: 400,
        backgroundColor: 'white',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 11,
        borderColor: "#0000008A",
        marginTop: 50,
        borderWidth: 1,
    },
});