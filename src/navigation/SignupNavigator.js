import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WelcomePage from '../screens/WelcomePage/WelcomePage';
import SignupPage from '../screens/SignupPage/SignupPage';
import FoodieIntroPage from '../screens/FoodieIntroPage/FoodieIntroPage';
import SelectionPage from '../screens/SelectionPage/SelectionPage';


import { Platform } from 'react-native';

const IOS_HEADER_HEIGHT = 100;

const screens = {
    Welcome: {
        screen: WelcomePage,
        navigationOptions: {
            headerShown: false,
            backgroundColor: "#FFFFFF",
        },
    },
    SignUp: {
        screen: SignupPage,
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
        screen: FoodieIntroPage,
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
        screen: SelectionPage,
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