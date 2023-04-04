import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import SignupImg from "../../assets/images/SignupImg.svg";
import DefaultPic from "../../assets/images/signUpProfile.svg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FormInput from "../../components/common/FormInput";
import Button from "../../components/common/Button";
import { BlurView } from 'expo-blur';

export default function SignupScreen({ navigation }) {
  const [showPopup, setShowPopup] = useState(false);

  const [fullName, setFullName] = useState(''); 

  const handleOpenPopup = () => { 
    setShowPopup(true) 
  }

  const handleClosePopup = () => {  setShowPopup(false) }

  const handleFullNameChange = (text) => { // Check if the user has entered a space. 
    const spaceIndex = text.indexOf(' '); 
    if (spaceIndex !== -1) { // Split the full name into first and last name. 
      const firstName = text.substring(0, spaceIndex); const lastName = text.substring(spaceIndex + 1); // Update the state with the first and last name. 
      setFullName({ firstName, lastName }); } 
    else { // Only the first name is entered. 
      setFullName({ firstName: text, lastName: '' }); 
    } }; 

    const goToGuestSignin = () => { }

    const goToSignin = () => { navigation.navigate("LoginScreen") }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.guestSignin} onPress={goToGuestSignin}>Skip With Guest Sign In</Text>
        {/* header image */}
        <View style={styles.imgContainer}>
          <SignupImg height="80%" width="50%" style={styles.welcomeImg} />
        </View>

        <Text style={styles.header}>Create An Account</Text>

        <View style={styles.formContainer}>
          <FormInput
            label="Full Name"
            type="name"
            textInputOptions={{
              placeholder: "Full Name",
              autoCapitalize: "none",
              autoCorrect: false,
            }}
          />

          <FormInput
            label="Email"
            type="email"
            textInputOptions={{
              placeholder: "Email",
              keyboardType: "email-address",
              autoCapitalize: "none",
              autoCorrect: false,
            }}
          />

          <FormInput
            label="Password"
            type="password"
            textInputOptions={{
              placeholder: "Password",
              autoCapitalize: "none",
              autoCorrect: false,
            }}
          />

          <Button 
            text="Sign Up" 
            action={handleOpenPopup} 
            style={{
                width: "80%",
                marginBottom: 5,
                marginTop: 50,
            }}
            textColor="#FFFFFF"
          />

          <View style={styles.line}>
            <View style={styles.greyline} />
            <Text style={styles.linetext}>or</Text>
            <View style={styles.greyline} />
          </View>

          <View style={styles.signInTextContainer}>
            <Text style={styles.signInText}>
              Already have an account? {"\n"}
              <Text style={[styles.signInText, { color: "#AE394D" }]} onPress={goToSignin}>
                Sign In
              </Text>
            </Text>
          </View>

          <TouchableOpacity style={styles.googlePlaceHolder}>
            <Text style={{ ...styles.buttonText, color: "black" }}>
              Sign In With Google
            </Text>
          </TouchableOpacity>
        </View>
        
        {showPopup && (
          <BlurView intensity={10} style={StyleSheet.absoluteFill} />    
        )}
        <Modal visible={showPopup} transparent={true} animationType="fade">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <DefaultPic />
              <Text style={styles.modalTitle}>Signup Successful</Text>
              <Text style={styles.modalText}>Your account has been created Please wait a moment we are preparing for you...</Text>
              <ActivityIndicator size="large" color="#983C69" style={styles.loading}/>

              {/* button to close modal (temporary) */}
              <Button text="OK" action={handleClosePopup} />
              
            </View>
          </View>
        </Modal>
      </View>      
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingTop: 30,
    // paddingBottom: screenHeight,
    position: 'relative',
  },
  imgContainer: {
    marginTop: "15%",
    height: "30%",
    marginBottom: "-13%",
    // for debugging
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: "4",
    alignItems: "center",
  },
  welcomeImg: {
    width: "100%",
  },
  header: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
    marginTop: "5%",
    marginBottom: 10,
  },
  formContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: 700,
    fontSize: 15,
  },
  line: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginTop: 15,
  },
  linetext: {
    textAlign: "center",
    width: 25,
    color: "#0000008A",
  },
  greyline: {
    flex: 1,
    height: 1,
    backgroundColor: "#DBD5D5",
  },
  googlePlaceHolder: {
    height: 50,
    width: "80%",
    maxWidth: 400,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 11,
    borderColor: "#0000008A",
    marginTop: 50,
    borderWidth: 1,
  },
  signInTextContainer: {
    marginTop: 10,
  },
  signInText: {
    fontSize: 18,
    textAlign: "center",
  },
  text: {
    fontFamily: "Quicksand-Bold",
  },
  guestSignin: {
    position: "absolute",
    right: 5,
    color: "#AE394D",
    textDecorationLine: "underline",
    fontFamily: "Quicksand-Bold",
    padding: 10,
    zIndex: 2,
    top: "4%",
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#AE394D',
    marginTop: '10%',
    marginBottom: '5%',
  },
  modalText: {
    fontSize: 16,
    color: '#0000008A',
    width: 220,
    textAlign: 'center',
    marginBottom: 20,
  },
  loading: {
    marginTop: "5%",
    marginBottom: "10%",
  },
});
