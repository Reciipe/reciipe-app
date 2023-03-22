import { Text, TextInput, View, StyleSheet,TouchableOpacity, Alert, Platform } from "react-native";
import { useState } from "react";

export default function WelcomeForm(){
    const [enteredFullName, setEnteredFullName] = useState("");
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

    const [credentialsInvalid, setCredentialsInvalid] = useState({
        fullName: false,
        username: false,
        password: false,
        confirmPassword: false,
    });

    function updateInputValueHandler(inputType, value){
        switch(inputType){
            case 'name':
                setEnteredFullName(value);
                break;
            case 'username':
                setEnteredUsername(value);
                break;
            case 'password':
                setEnteredPassword(value);
                break;
        }
    }

    function submitHandler() {

        setEnteredFullName(enteredFullName.trim());
        setEnteredUsername(enteredUsername.trim());
        setEnteredPassword(enteredPassword.trim());

        const fullNameIsInvalid = enteredFullName.trim().split(" ").length == 2;
        const usernameIsValid = enteredUsername.length > 0;
        const passwordIsValid = enteredPassword.length > 6;
        const passwordsAreEqual = enteredPassword === enteredConfirmPassword;

        if (
            !fullNameIsInvalid ||
            !usernameIsValid ||
            !passwordIsValid
            // || (!isLogin && (!passwordsAreEqual))
          ) {
            Alert.alert('Invalid input', 'Please check your entered credentials.');
            setCredentialsInvalid({
                fullName: !fullNameIsInvalid,
                username: !usernameIsValid,
                password: !passwordIsValid,
                confirmPassword: !passwordIsValid || !passwordsAreEqual,
            });
            return;
          }

          /* else, authenticate user */
        //   onAuthenticate({ email, password });
        Alert.alert('Success!', 'User signup successful.'); //temp for now
        setCredentialsInvalid({
            fullName: !fullNameIsInvalid,
            username: !usernameIsValid,
            password: !passwordIsValid,
            confirmPassword: !passwordsAreEqual,
        })
        setEnteredFullName("");
        setEnteredUsername("");
        setEnteredPassword("");
        setEnteredConfirmPassword("");
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={[styles.label, credentialsInvalid.fullName && styles.invalidLabel]}>Full Name</Text>
                <TextInput 
                    placeholder='First and Last name' 
                    style={[styles.input, credentialsInvalid.fullName && styles.invalidInput]} 
                    onChangeText={updateInputValueHandler.bind(this, 'name')}
                    value={enteredFullName}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={[styles.label, credentialsInvalid.username && styles.invalidLabel]}>Username</Text>
                <TextInput 
                    keyboardType='email-address' 
                    autoCorrect={false} autoCapitalize='none' 
                    style={[styles.input, credentialsInvalid.username && styles.invalidInput]} 
                    onChangeText={updateInputValueHandler.bind(this, 'username')}
                    value={enteredUsername}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={[styles.label, credentialsInvalid.password && styles.invalidLabel]}>Password</Text>
                <TextInput 
                    style={[styles.input, credentialsInvalid.password && styles.invalidInput]} 
                    onChangeText={updateInputValueHandler.bind(this, 'password')}
                    value={enteredPassword}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={submitHandler}>
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
        height: 42,
    },
    invalidLabel: {
        color: "#9b095c",
    },
    invalidInput: {
        backgroundColor: "#fcc4e4",
        borderColor: '#9b095c',
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
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.2,
                shadowRadius: 1,
            },
            android: {
                elevation: 4,
            },
        }),
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