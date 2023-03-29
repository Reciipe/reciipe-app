import { StyleSheet, View, Text } from "react-native";
import Button from "../../components/common/Button";

import LandingImg from "../../assets/images/landingImage.svg";

export default function LandingScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("CreatorIntroScreen");
  };

  return (
    <View style={styles.container}>
        <View style={styles.imgContainer}>
            <LandingImg width="150%" height="100%" resizeMode="cover"/>
        </View>

        <Text style={styles.headingText}>
            Cooking Ethnic Meals made easy
        </Text>

        <Text style={styles.bodyText}>
            Cooking made easier with the step-by-step made that helps you 
            make any dish
        </Text>

        <Button
            text="Next"
            action={pressHandler}
            style={styles.btn}
            textColor="#AE394D"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
  },
  imgContainer: {
    height: "40%",
    width: "100%",
    alignItems: "center",
    marginBottom: 40,
  }, 
  headingText: {
    fontSize: 26,
    fontFamily: "Quicksand-Bold",
    textAlign: "center",
    width: 290,
    marginBottom: 20,
  },
  bodyText: {
    fontFamily: "Quicksand-Regular",
    color: "#0000008A",
    textAlign: 'center',
    fontSize: 15,
    width: 370,
  },
  btn: {
    position: 'absolute',
    bottom: '10%',
    backgroundColor: "#FFFFF8", 
    justifySelf: 'flex-end',
  },
});
