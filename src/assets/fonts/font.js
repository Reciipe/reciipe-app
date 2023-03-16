import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    "Quicksand-Bold": require("./Quicksand-Bold.ttf"),
    "Quicksand-Regular": require("./Quicksand-Regular.ttf"),
  });
};
