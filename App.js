import { useCallback, useState } from 'react'

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { colors } from './src/global/colors'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

import Navigator from './src/navigation/Navigator'



export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'LibreBaskerville': require('./assets/fonts/LibreBaskerville-Regular.ttf'),
    'Diplomata': require('./assets/fonts/DiplomataSC-Regular.ttf')
  })
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  

  return (

    <SafeAreaView style={styles.container}>
       <Navigator />
    </SafeAreaView>
      
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.rosadoClaro,
  }
})

