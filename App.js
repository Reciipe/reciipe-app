import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {{ fontSize: 30, color: 'white',}}>Who are You?</Text>
      <StatusBar style="auto" />
      <View style={styles.space} /> 
      <View style={styles.screenContainer}>
      <AppButton title="Foodie" size="sm" backgroundColor="#FFFFFF" />
      <View style={styles.space} /> 
      <AppButton title="Creator" size="sm" backgroundColor="black" />
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
    flex: 1,
    backgroundColor: '#AE394D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //button container properties
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#FFFFFF",
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
    fontSize: 15,
    color: "#000000",
    alignSelf: "center",
    weight: 600,
    lineHeight: 19, 
  }
});
