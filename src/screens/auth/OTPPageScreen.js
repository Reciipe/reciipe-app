import { StyleSheet, View, Text, TextInput, TouchableWithoutFeedback,Keyboard } from "react-native";
import Button from "../../components/common/Button";
import OTPPage from "../../assets/images/otppage.svg";


  export default function OTPPageScreen({ navigation }) {

    const pressHandler = () => {
      console.log("Add navigation");
      // navigation.navigate("OTPPageScreen");
    };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.OTPcontainer}>
      <View style={styles.imgContainer}>
        <OTPPage width="150%" style={styles.OTPPage} />
      </View>

      {/* <View > */}
      <Text style={styles.MailText}>
        You've Got Mail      
      </Text>

      <Text style={styles.OTPText}>
      We have sent the OTP verification code to your email address. Check your email and enter the code below
      </Text>

      <View style={styles.codebox}>
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
    </View>
      <Text style={styles.noemailText}>
      Didn't rceive an email?
      </Text>
      <Text style={styles.codeText}>
      You can resend code in     </Text>
      <Button text="Enter" action={pressHandler} textColor="#FFF" />
    </View> 
    {/* </View> */}
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  OTPcontainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
  },
  textcontainer: {

  },
  imgContainer: {
    height: "45%",
    width: 217,
    // display: "flex",
    alignItems: "center",
    //backgroundColor: 'red',
    marginBottom: 73,
  },
  OTPPage: {
    flexGrow: 1,
    flexShrink: 0,
  },
  MailText: {
    fontSize: 15,
    fontFamily: "Quicksand-Bold",
    fontWeight: 700,
    textAlign: "left",
    marginBottom: 1,
    bottom: 140,
    width: "85%",
  },
  OTPText: {
    fontSize: 10,
    fontFamily: "Quicksand-regular",
    fontWeight: 500,
    textAlign: "left",
    marginleft: 2,
    marginright: 2,
    bottom: "17%",
    width: "85%",
  },

  noemailText: {
    fontSize: 10,
    fontFamily: "Quicksand-regular",
    fontWeight: 500,
    textAlign: "center",
    marginleft: 2,
    marginright: 2,
    bottom: "16%",
    width: "85%",
  },


    codeText: {
      fontSize: 10,
      fontFamily: "Quicksand-regular",
      fontWeight: 500,
      textAlign: "center",
      marginleft: 1,
      marginright: 1,
      bottom: "17%",
      width: "85%",
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
    borderRadius: 11,
  },


  codebox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1,
    bottom: "35%",
    width: "85%",
  },

  input: {
    width: 69,
    height: 57.35,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#B6C1C7',
    textAlign: 'center',
    marginHorizontal: 7, 
    backgroundColor:'#F0F0F0',
    borderRadius: 14.3377,

  },
  highlight: {
    color: "#AE394D",
  },
  buttonText: {
    color: "white",
    fontWeight: 700,
    fontSize: 15,
  },


});
