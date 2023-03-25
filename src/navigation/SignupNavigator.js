import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WelcomeScreen from '../screens/intro/CreatorIntroScreen';
import CreatorSignupScreen from '../screens/auth/CreatorSignupScreen';
import FoodieIntroScreen from '../screens/intro/FoodieIntroScreen';
import SelectionScreen from '../screens/intro/SelectionScreen';


import { Platform } from 'react-native';

const IOS_HEADER_HEIGHT = 100;

const screens = {
    Welcome: {
        screen: WelcomeScreen,
        navigationOptions: {
            headerShown: false,
            backgroundColor: "#FFFFFF",
        },
    },
    SignUp: {
        screen: CreatorSignupScreen,
        navigationOptions: {
            title: '',
            headerStyle: {
                height: Platform.OS === 'ios' ? IOS_HEADER_HEIGHT : 60, 
                backgroundColor: "#FFFFFF"
            },
            footerStyle:{
                backgroundColor: "#FFFFFF",
            }
        },
    }, 
    FoodieIntroPage: {
        screen: FoodieIntroScreen,
        navigationOptions: {
            title: '',
            headerStyle: {
                height: Platform.OS === 'ios' ? IOS_HEADER_HEIGHT : 60, 
                backgroundColor: "#FFFFFF"
            },
            footerStyle:{
                backgroundColor: "#FFFFFF",
            }
        },
    },
    SelectionPage: {
        screen: SelectionScreen,
        navigationOptions: {
            title: '',
            headerStyle: {
                height: Platform.OS === 'ios' ? IOS_HEADER_HEIGHT : 60, 
                backgroundColor: "#FFFFFF"
            },
            footerStyle:{
                backgroundColor: "#FFFFFF",
            }
        },
    },
}

const SignupStack = createStackNavigator(screens);

export default createAppContainer(SignupStack);