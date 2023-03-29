import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity, 
  } from "react-native";
import FormInput from "../../components/common/FormInput";
import Button from "../../components/common/Button";  


export default function LoginScreen() {
    const submitHandler = () => {}

    const goToPasswordReset = () => {}

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
  
          <Text style={[styles.header, {textAlign: "left", padding: 35,marginBottom: "15%"}]}>Welcome Back!</Text>

          <Text style={styles.header}>Sign In</Text>
  
          <View style={styles.formContainer}>
              <FormInput 
                  label="Email"
                  type="email"
                  textInputOptions={
                      {
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
                          autoCapitalize:"none",
                          autoCorrect:false,
                      }
                  }
              />
              <View style={styles.forgorContainer}>
                <Text style={styles.forgotPassword} onPress={goToPasswordReset}>Forgot Password?</Text>
              </View>

              <Button 
                text="Log In" 
                action={submitHandler} 
                style={{
                    width: "80%",
                    marginTop: 50,
                }}
                textColor="#FFFFFF"
              />
  
              <View style={styles.line} >
                  <View style={styles.greyline} />
                  <Text style={styles.linetext}>or</Text>
                  <View style={styles.greyline} />
              </View>
  
              <TouchableOpacity style={styles.googlePlaceHolder}>
                  <Text style={{...styles.buttonText, color: 'black'}}>Sign In With Google</Text>
              </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    header: {
      fontSize: 20,
      textAlign: "center",
      marginTop: 5,
      marginBottom: 10,
      fontFamily: "Quicksand-Bold",
    },
    formContainer:{
      alignItems: 'center',
      justifyContent: 'center',
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
        marginBottom: 15,
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
        maxWidth: 350,
        backgroundColor: 'white',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 11,
        borderColor: "#0000008A",
        borderWidth: 1,
    },
    text:{
        fontFamily: "Quicksand-Bold",
    },
    forgotPassword: {
        color: "#AE394D",
        textDecorationLine: "underline",
        fontFamily: "Quicksand-Bold",
        alignSelf: 'flex-start',
      },
      forgorContainer: {width: "80%"}
  });
  