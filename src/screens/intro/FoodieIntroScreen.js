import { StyleSheet, View, Text } from "react-native";
import Button from "../../components/common/Button";

import WelcomeImg from '../../assets/images/FoodieIntroPage.svg';

export default function FoodieIntroPage({navigation}) {

    const pressHandler = () => {
        navigation.navigate('SelectionPage');
        // navigation.push('SelectionPage');
    }

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <WelcomeImg width="150%" style={styles.welcomeImg} />
            </View>

            <Text style={styles.welcomeText} >Elevate your{"\n"} cooking skills by following {"\n"} recipes curated by{""} <Text style={styles.highlight}>renowed</Text> {"\n"} food curators!</Text>


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
        gap: 30,
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
        fontSize: 20,
        // fontFamily: "Quicksand-Bold",
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: 1,
    },
    button: {
        position: "absolute",
        height: 50,
        width: 250,
        top: 500,
        left: 64,
        backgroundColor: "#AE394D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 11
    },
    highlight: {
        color: "#AE394D",
      },
    buttonText: {
        color: "white",
        fontWeight: 700,
        fontSize: 15,
    }
});