import React, { useState } from 'react'
import { Text, View, Button, Modal } from 'react-native';
import { globalStyles as styles } from '../styles/global';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../components/Card';
import { MaterialIcons } from "@expo/vector-icons";


const Home = ({ navigation }) => {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);
    const [open, setOpen] = useState(false);
    const handlePress = (screen) => {
        // navigation.navigate(screen)
        navigation.push(screen);
    }

    return (
        <View style={styles.container}>
            <Modal visible={open}>
                <MaterialIcons 
                    name="close"
                    style={styles.closeIcon}
                    size={30}
                    onPress={() => setOpen(false)}
                />
                <Text>ADD New reviews</Text>
            </Modal>
            <MaterialIcons 
               name="add" 
               style={styles.addIcon} 
               size={30}
               onPress={() => setOpen(true)}
            />
            <FlatList
                style={{ width: "100%" }}
                data={reviews}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        //style={styles.item}
                        onPress={() => navigation.navigate('ReviewDetails', item)}
                    >
                        <Card>
                            <Text style={styles.titleText}>{`${index + 1} -  ${item.title}`}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            <Button title="About" onPress={() => handlePress("About")} />
        </View>
    )
}


export default Home;