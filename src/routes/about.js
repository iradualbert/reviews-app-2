import 'react-native-gesture-handler';  // must be included, otherwise navigation stack will throw an error
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/About";
import Header from "../components/header";


const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />
            }
        }

    },


};

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: "#eee",
            height: 60,

        }
    }
});
export default AboutStack;



// ,
// "react-navigation": "^4.4.0",
//     "react-navigation-drawer": "^2.5.0",
//         "react-navigation-stack": "^2.8.2",
//             "react-native-gesture-handler": "~1.6.0",
//                 "react-native-safe-area-context": "~3.0.7",
//                     "@react-native-community/masked-view": "0.1.10",
//                         "react-native-reanimated": "~1.9.0"