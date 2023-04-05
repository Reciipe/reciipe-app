import { StyleSheet, View,  Text, TextInput, TouchableWithoutFeedback,Keyboard } from "react-native";
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

      <View style={styles.container}>
        <Text style={styles.MailText}>
          You've Got Mail      
        </Text>

        <Text style={styles.OTPText}>
          We have sent the OTP verification code to your email address. Check your email and enter the code below
        </Text>

        <View style={styles.codebox}> 
          <TextInput style={styles.input} keyboardType='numeric' />
          <TextInput style={styles.input} keyboardType='numeric' />
          <TextInput style={styles.input} keyboardType='numeric'/>
          <TextInput style={styles.input} keyboardType='numeric'/>
        </View>

        <View>
          <Text style={styles.noemailText}>
            Didn't rceive an email? {'\n'}
            You can resend code in     
          </Text>
          
        </View>

      </View>
      
         </View> 
    
    </TouchableWithoutFeedback>
 

  )
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },

  OTPcontainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    gap: 15,
  },
  
  imgContainer: {
    height: "45%",
    width: 217,
    alignItems: "center",
    marginBottom: 73,
  },
  OTPPage: {
    flexGrow: 1,
    flexShrink: 0,
  },
  MailText: {
    marginTop: 5,
    fontSize: 15,
    fontFamily: "Quicksand-Bold",
    fontWeight: 700,
    textAlign: "left",
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
    bottom: "89%",
    
  },

  codebox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: "30%",
    width: "85%",
  },

  noemailText: {
    position: 'relative',
    fontSize: 10,
    fontFamily: "Quicksand-regular",
    fontWeight: 500,
    textAlign: "center",
    marginleft: 2,
    marginright: 2,
    bottom: 85,
    width: "85%",
  },


  codeText: {
    fontSize: 10,
    fontFamily: "Quicksand-regular",
    fontWeight: 500,
    textAlign: "center",
    marginleft: 1,
    marginright: 1,
    width: "85%",

  },


  input: {
    width: 69,
    height: 57.35,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#B6C1C7',
    textAlign: 'center',
    marginHorizontal: 11, 
    backgroundColor:'#F0F0F0',
    borderRadius: 14.3377,
  },
  highlight: {
    color: "#AE394D",
  },
  
});
