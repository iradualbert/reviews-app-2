import 'react-native-gesture-handler';  // must be included, otherwise navigation stack will throw an error
import { createStackNavigator } from "react-navigation-stack";
import React from "react"; 
import ReviewDetails from "../screens/ReviewDetails";
import Home from "../screens/Home";
import Header from "../components/header";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} />
            }
        }
    },
    
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
        }
    },
   

};
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: "#eee",
            height: 60,
        }
    }
});
export default HomeStack;

