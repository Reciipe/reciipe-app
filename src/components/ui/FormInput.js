import { Text, TextInput, View, StyleSheet} from "react-native";


export default function FormInput({label, handleTextChange, textInputOptions}){
    return (
        <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput 
            style={styles.input} 
            onChangeText={handleTextChange}
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
    },
    input: {
        padding: 6,
        borderRadius: 4,
        fontSize: 18,
        borderColor: '#DBD5D5',
        borderWidth: 1,
        height: 42,
    },
});