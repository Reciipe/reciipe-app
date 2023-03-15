import { StyleSheet, View, Text } from "react-native";
import Button from "../../components/Button";

import WelcomeImg from './images/welcomeImg.svg';

export default function WelcomePage({navigation}) {

    const pressHandler = () => {
        navigation.navigate('SignUp');
        // navigation.push('SignUp');
    }

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <WelcomeImg style={styles.welcomeImg} />
            </View>

            <Text style={styles.welcomeText} >Share your recipes to your audience in one place</Text>

            <Button text='Get Started' action={pressHandler}/>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        height: "100%",
        width: '100%',
        backgroundColor: "#FFFFFF",
    },
    imgContainer:{
        marginTop: "15%",
        height: "60%",
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    welcomeImg: {
        width: "100%",
        height: "100%",

        // flexGrow: 1,
        // flexShrink: 0,
    },
    welcomeText: {
        position: "absolute",
        fontSize: 13,
        fontWeight: 700,
        textAlign: 'center',
        top: '72%',
        width: 200,
        left: "50%",
        transform: [
            {translateX: -100}
        ],
    },
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