import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  CreatorIntroScreen,
  FoodieIntroScreen,
  SelectionScreen,
} from "../screens/intro/";
import { 
  CreatorSignupScreen,
  FoodieSignupScreen, 
  LoginScreen,
} from "../screens/auth/";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, statusBarTranslucent: true }}
    >
      {
        <>
          <Stack.Screen
            name="CreatorIntroScreen"
            component={CreatorIntroScreen}
          />
          <Stack.Screen
            name="FoodieIntroScreen"
            component={FoodieIntroScreen}
          />
          <Stack.Screen name="SelectionScreen" component={SelectionScreen} />
          <Stack.Screen name="CreatorSignupScreen" component={CreatorSignupScreen} />
          <Stack.Screen name="FoodieSignupScreen" component={FoodieSignupScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </>
      }
    </Stack.Navigator>
  );
}

// bottom navbar
// const Tab = createBottomTabNavigator();
// const AppTabs = () => {
//   return (
//     /**
//      * Bottom navbar navigation
//      */
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarInactiveTintColor: "#000",
//         tabBarActiveTintColor: theme.colors.primary,
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeStackNavigator}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <FontAwesome name="home" size={24} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Browse"
//         component={BrowseScreen}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <FontAwesome name="search" size={22} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Favorites"
//         component={FavoritesStackNavigator}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <MaterialIcons name="star" size={24} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           headerShown: true,
//           title: "Account",
//           headerTitleAlign: "center",
//           tabBarIcon: ({ color }) => (
//             <FontAwesome name="user" size={20} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// home screen navigation
// const HomeStack = createNativeStackNavigator()
// const HomeStackNavigator = () => {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="GroceryStoresScreen"
//         component={GroceryStoresScreen}
//         options={{
//           title: 'Grocery Stores',
//           headerTitleAlign: 'center',
//           headerShadowVisible: false,
//         }}
//       />
//       <Stack.Screen
//         name="RestaurantsScreen"
//         component={RestaurantsScreen}
//         options={{
//           title: 'Restaurants',
//           headerTitleAlign: 'center',
//           headerShadowVisible: false,
//         }}
//       />
//       <Stack.Screen
//         name="ServicesScreen"
//         component={ServicesScreen}
//         options={{
//           title: 'Services',
//           headerTitleAlign: 'center',
//           headerShadowVisible: false,
//         }}
//       />
//       <Stack.Screen
//         name="BusinessScreen"
//         component={BusinessScreen}
//         options={{
//           title: '',
//           headerTintColor: theme.colors.primary,
//           headerTransparent: true,
//         }}
//       />
//       <Stack.Screen
//         name="LocationScreen"
//         component={LocationScreen}
//         options={{
//           title: '',
//           headerTintColor: theme.colors.primary,
//           headerShadowVisible: false,
//         }}
//       />
//     </HomeStack.Navigator>
//   )
// }
