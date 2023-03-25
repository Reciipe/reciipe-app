import { StyleSheet, View, Text } from "react-native";
import Button from "../../components/common/Button";

import WelcomeImg from '../../assets/images/welcomeImg.svg';

export default function WelcomeScreen({navigation}) {

    const pressHandler = () => {
        console.log("kechieeee here");
        // navigation.navigate('FoodieIntroPage');
        navigation.push('SignUp');
    }

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <WelcomeImg width="150%" style={styles.welcomeImg} />
            </View>

            <Text style={styles.welcomeText} >Share your recipes to your audience in one place</Text>

            <Button text='Get Started' action={pressHandler}/>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: '100%',
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 50,
    },
    imgContainer:{
        marginTop: "15%",
        height: "60%",
        width: "100%",
        display: "flex",
        alignItems: "center",
    },
    welcomeImg: {
        flexGrow: 1,
        flexShrink: 0,
    },
    welcomeText: {
        fontSize: 17,
        // fontFamily: "Quicksand-Bold",
        fontWeight: 700,
        textAlign: 'center',
        width: 220,
        marginBottom: 20,
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