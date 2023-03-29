import {useState} from 'react';
import { Text, TextInput, View, StyleSheet} from "react-native";
import * as Yup from 'yup';

  const emailSchema = Yup.string()
    .email('Please enter a valid email')
    .required('Email is required');

  const nameSchema = Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters')
    .required('Name is required');

  const passwordShema = Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/, 'Password must contain a number, a lowercase letter, an uppercase letter, and a special character')
    .required('Password is required');

export default function FormInput({label, type, textInputOptions}){
    const [isValid, setIsValid] = useState(true);
    const [errorLabel, setErrorLabel] = useState("");
    const [inputText, setInputText] = useState("");


    function validateInput(text){
        const val = type.toLowerCase();
        switch(val) {
            case 'email':
                setInputText(text);
                emailSchema.validate(text)
                .then(() => {
                    setIsValid(true);

                }).catch((error) => {setErrorLabel(error.message); setIsValid(false)});
                break;
            
            case 'name':
                setInputText(text);
                nameSchema.validate(text)
                .then(() => {
                    setIsValid(true);

                }).catch((error) => {setErrorLabel(error.message); setIsValid(false);});
                break;
            
            case 'password':
                setInputText(text);
                passwordShema.validate(text)
                .then(() => {
                    setIsValid(true);

                }).catch((error) => {setErrorLabel(error.message); setIsValid(false);});
                break; 
        }
    }

    return (
        <View style={styles.inputContainer}>
        {isValid ? 
            <Text style={styles.label}>{label}</Text> 
            : 
            <Text style={[styles.label, styles.invalidLabel]}>{errorLabel}</Text>
        }
        <TextInput 
            style={[styles.input, !isValid && styles.invalidInput]} 
            onChangeText={validateInput}
            value={inputText}
            secureTextEntry={type === "password"}
            {...textInputOptions}
        />
    </View>
    )
}

const styles = StyleSheet.create({
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
        fontFamily: "Quicksand-Bold",
    },
    input: {
        padding: 6,
        borderRadius: 4,
        fontSize: 18,
        borderColor: '#DBD5D5',
        borderWidth: 1,
        height: 42,
        fontFamily: "Quicksand-Regular",
    },
    invalidLabel: {
        color: "#9b095c",
    },
    invalidInput: {
        backgroundColor: "#fcc4e4",
        borderColor: '#9b095c',
    },
});