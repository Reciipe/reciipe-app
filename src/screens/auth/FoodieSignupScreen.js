import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity, 
    Platform
  } from "react-native";
  import SignupImg from "../../assets/images/SignupImg.svg";
  import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
  import FormInput from "../../components/common/FormInput";
import Button from "../../components/common/Button";
  
  
  // navigation.replace() //goes to a new page without having a back button
  
  export default function FoodieSignupScreen({navigation}) {

    function goToSignin(){ navigation.navigate("LoginScreen") }
    
    function submitHandler(){}

    const goToGuestSignin = () => { }

    return (
    //   <KeyboardAwareScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <Text style={styles.guestSignin} onPress={goToGuestSignin}>Skip With Guest Sign In</Text>

            <View style={styles.imgContainer}>
                <SignupImg height="100%" width="100%" style={styles.welcomeImg} />
            </View>
  
          <Text style={styles.header}>Create An Account</Text>
  
          <View style={styles.formContainer}>
              <FormInput 
                  label="Email"
                  type="email"
                  textInputOptions={
                      {
                          placeholder:"Email",
                          keyboardType:"email-address",
                          autoCapitalize:"none",
                          autoCorrect:false,
                      }
                  }
              />
  
              <FormInput 
                  label="Password"
                  type="password"
                  textInputOptions={
                      {
                          placeholder:"Password",
                          autoCapitalize:"none",
                          autoCorrect:false,
                      }
                  }
              />

              <Button 
                text="Sign Up" 
                action={submitHandler} 
                style={{
                    width: "80%",
                    marginBottom: 5,
                    marginTop: 50,
                }}
                textColor="#FFFFFF"
              />
  
              <View style={styles.line} >
                  <View style={styles.greyline} />
                  <Text style={styles.linetext}>or</Text>
                  <View style={styles.greyline} />
              </View>
  
              <View style={styles.signInTextContainer}>
                  <Text style={styles.signInText}>Already have an account?</Text>
                  <Text style={[styles.signInText, {color: '#AE394D'}]} onPress={goToSignin}>Sign In</Text>
              </View>
  
              <TouchableOpacity style={styles.googlePlaceHolder}>
                  <Text style={{...styles.buttonText, color: 'black'}}>Sign In With Google</Text>
              </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    //   </KeyboardAwareScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFFFFF",
      flex: 1,
      height: "100%",
      paddingBottom: 30,
      position: 'relative',
      paddingTop: "12%",
    },
    imgContainer: {
      width: "100%",
      minHeight: 200,
      flex: 1,
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
    //   marginTop: 50m
    },
    welcomeImg: {
      width: "100%",
    },
    header: {
      fontSize: 20,
      fontWeight: 700,
      textAlign: "center",
      marginTop: 5,
      marginBottom: 10,
    },
    formContainer:{
      alignItems: 'center',
      justifyContent: 'center',
  },
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
  invalidLabel: {
      color: "#9b095c",
  },
  invalidInput: {
      backgroundColor: "#fcc4e4",
      borderColor: '#9b095c',
  },
  button: {
      height: 50,
      width: "80%",
      maxWidth: 400,
      backgroundColor: "#AE394D",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 11,
      marginBottom: 5,
      marginTop: 50,
      ...Platform.select({
          ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.2,
              shadowRadius: 1,
          },
          android: {
              elevation: 4,
          },
      }),
  },
  buttonText: {
      color: "white",
      fontWeight: 700,
      fontSize: 15,
  },
  line:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: "80%",
      marginTop: 15,
  },
  linetext:{
      textAlign: 'center',
      width: 25,
      color: "#0000008A",
  },
  greyline: {
      flex:1,
      height: 1,
      backgroundColor: '#DBD5D5',
  },
  googlePlaceHolder:{
      height: 50,
      width: "80%",
      maxWidth: 400,
      backgroundColor: 'white',
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
      textAlign: 'center',
  },
  text:{
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
  });
  