import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';

import { globalStyles as styles } from './src/styles/global';
import Navigator from "./src/routes/drawer";

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    getFonts()
      .then(() => setFontLoaded(true))
  }, [])

  if (fontLoaded) {
    return <Navigator style={styles.container}/>
  } else {
    return <View style={styles.container}><Text>Loading...</Text></View>
  }

}



export default App;