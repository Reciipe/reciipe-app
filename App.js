import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomePage from "./src/screens/WelcomePage/WelcomePage";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import SignupPage from "./src/screens/SignupPage/SignupPage";
import SignupNavigator from "./src/navigation/SignupNavigator";
import { loadFonts } from "./src/assets/fonts/font";

// const LoadAssets = async () => {
//   const imageAssests = Asset.loadAsync([
//     require("./src/screens/WelcomePage/images/welcomeImg.svg"),
//   ]);
//   const getFonts = Font.loadAsync({
//     "Quicksand-Regular": require("./src/assets/fonts/Quicksand-Regular.ttf"),
//     "Quicksand-Bold": require("./src/assets/fonts/Quicksand-Bold.ttf"),
//   });

//   return await Promise.all([imageAssests, getFonts]);
// };

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);
  // const [assetLoaded, setAssetLoaded] = useState(false);

  // if(!assetLoaded){
  //   return (
  //     <AppLoading
  //       startAsync={LoadAssets}
  //       onFinish={()=> setAssetLoaded(true)}
  //     />
  //   );
  // }

  return <SignupNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
