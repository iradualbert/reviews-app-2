import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../components/Card';


const ReviewDetails = ({navigation}) => {
    const title = navigation.getParam('title');
    const rating = navigation.getParam('rating');
    const body = navigation.getParam('body');
    
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text> {title}</Text>
                <Text> {body} </Text>
                <View style={styles.rating}>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    )

}

const styles = StyleSheet.create({
    rating: {
        paddingTop: 16,
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderTopColor: "#eee",
        borderTopWidth: 1,
    }
});

export default ReviewDetails