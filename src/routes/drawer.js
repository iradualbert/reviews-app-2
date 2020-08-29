import 'react-native-gesture-handler';
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import AboutStack from "./about";
import HomeStack from "./homeStack";

const RootDrawerNavigator =  createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
    About: {
        screen: AboutStack
    }
})

export default createAppContainer(RootDrawerNavigator); // as navigator 