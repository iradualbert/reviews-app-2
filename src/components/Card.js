import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";


const Card = (props) => {
    const {
        children
    } = props
    return (
        <View style={styles.card}>
           <View style={styles.content}>
               {props.children}
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: 'white',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        padding: 5,
        margin: 5
    },
    content: {

    }
})

export default Card;