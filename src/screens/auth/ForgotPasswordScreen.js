import {  View, StyleSheet, Text, TextInput
   } from "react-native";
import Button from "../../components/common/Button";


export default function ForgotPasswordScreen({ navigation }) {

  const pressHandler = () => {
    //console.log("Add navigation");
     navigation.navigate("OTPPageScreen");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.forgotpasswordText}>
        Forgot Password 
      </Text>

      <Text style={styles.spanText}>
        Enter your email address. We will send an OTP code for verification in the next step
      </Text>

      <Text style={styles.emailText}>
        Email
      </Text>

      <View style={styles.emailBorder}>
      <TextInput placeholder="Email" />
    </View>


      <View style={styles.line}>
            <View style={styles.redline} />
            <View style={styles.redline} />
          </View>

      <View style={styles.buttonContainer}>
      
      

      <Button text="Continue" action={pressHandler} textColor="#FFF" />

       </View>

       
       </View>
    
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    //alignItems: "center",
    gap: 2,
    paddingTop: "18%",

  },
  emailBorder: {
    borderWidth: 0.5,
     borderColor: 'white', 
     padding: 0.1,
     bottom: 440,
     left: 20,
     
  },

  buttonContainer: {
    flex: 1,
    height: "100%",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "18%",
    bottom: 30,

  },
  
  forgotpasswordText: {
    fontSize: 20,
    fontWeight: 600,
    textAlign: "left",
    marginBottom: 1,
    lineHeight: 25,
    top: 35,
    height: 60,
    width: 250,
    left: 20,
  },
  redline: {
    flex: 1,
    height: 0.9,
    backgroundColor: "#AE394D",
  },
  spanText: {
    fontSize: 12,
    // fontFamily: "Quicksand-Bold",
    textAlign: "left",
    marginBottom: 1,
    fontWeight: 500,
    color: "#0000008A",
    lineHeight: 25,
    height: 60,
    width: "90%",
    left: 20, 
  },

  emailText: {
    fontSize: 10,
    // fontFamily: "Quicksand-Bold",
    textAlign: "left",
    marginBottom: 1,
    fontWeight: 700,
    lineHeight: 12.5,
    height: 450,
    width: 123,
    left: 20,
    bottom: 5,
    top: 2,

  },
  line: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginTop: 20,
    left:20,
    bottom: 463,
  },

  button: {
    position: "absolute",
    height: 50,
    width: 250,
    top: 687,
    backgroundColor: "#AE394D",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    
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
