import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import ReciipeLogo from "../../assets/images/RECIIPE-logo.svg";

export default function SelectionScreen({navigation}) {

  const goToFoodieSignUp = () => { navigation.navigate("FoodieSignupScreen"); }
  
  const goToCreatorSignUp = () => { navigation.navigate("CreatorSignupScreen"); }

  return (
    <View style={styles.container}>

      <View style={styles.imgContainer}>
        <ReciipeLogo height="100%" width="200%" style={styles.screenImg} />
      </View>

      <Text style={styles.screenText}>Who are You?</Text>

      {/* <StatusBar style="auto" /> */}

      {/* <View style={styles.space} /> */}

      <View style={styles.screenContainer}>
        <AppButton title="Foodie" size="sm" backgroundColor="#FFFFFF" onPress={goToFoodieSignUp}/>
        <View style={styles.space} />
        <AppButton title="Creator" size="sm" backgroundColor="black" onPress={goToCreatorSignUp}/>
      </View>

    </View>
  );
}
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: "20%",
    display: 'flex',
    flexDirection: 'column',
    height: "100%",
  },
  imgContainer: {
    marginTop: "15%",
    height: "50%",
    width: "100%",
    alignItems: "center",
    marginBottom: "-13%",
  },
  screenImg: {
    width: "100%",
  },

  //button container properties
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#AE394D",
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 5,
    width: 179,
    height: 50,
  },

  //space between each item
  space: {
    width: 100,
    height: 50,
  },

  //button text properties
  appButtonText: {
    fontSize: 20,
    color: "#000000",
    alignSelf: "center",
    lineHeight: 19,
  },

  screenText: {
    fontSize: 30, 
    color: "black",
    paddingTop: 0,
    padding: 20,
    fontFamily: "Quicksand-Bold",
  },
});
