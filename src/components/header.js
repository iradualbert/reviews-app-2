import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const b_image = require("../../assets/game_bg.png")
const b_logo = require("../../assets/heart_logo.png")

const Header = ({navigation}) => {
    const openMenu = () => {
        navigation.openDrawer();
    }
    return (
        <ImageBackground source={b_image} style={styles.header}>
            <Image source={b_logo} style={styles.headerImage} />
            <MaterialIcons
                name="menu"
                size={28}
                onPress={openMenu}
                style={styles.icon}
            />
            <Text style={styles.headerText}>Favepark</Text>
        </ImageBackground>
    )
};
const styles = StyleSheet.create({
    header: {
        width: "100%", //"100",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: 20,
        letterSpacing: 1
    }, 
    icon : {
        position: "absolute",
        left: -70
    },
    headerImage: {
        height: 26,
        width: 26,
        marginHorizontal: 10,
    }
})
export default Header;