import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: "100%",
        padding: 20,
    },
    item: {
        backgroundColor: "#f7f7f7",
        borderColor: "black",
        width: "100%",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
    },
    titleText: {
        fontFamily: "nunito-bold",
        fontSize: 20,
        color: "#333",
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    addIcon: {
        paddingBottom: 10,
        alignSelf: "center",
    }
})

export const images = {
    ratings: {
        "1": require("../../assets/rating-1.png"),
        "2": require("../../assets/rating-2.png"),
        "3": require("../../assets/rating-3.png"),
        "4": require("../../assets/rating-4.png"),
        "5": require("../../assets/rating-5.png"),
    }    
}