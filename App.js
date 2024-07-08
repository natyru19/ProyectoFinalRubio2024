import { useCallback, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Coleccion from './src/screens/Coleccion';
import Productos from './src/screens/Productos';
import Header from './src/components/Header';
import { colors } from './src/global/colors'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import ItemListCategory from './src/screens/ItemListCategory';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Inicio from './src/screens/Inicio'
import Pantalones from './src/screens/Pantalones'
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

  const Stack = createNativeStackNavigator()

  return (

    // <SafeAreaView>
    //   <Navigator />
    // </SafeAreaView>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Inicio'>
          <Stack.Screen name="Inicio" component={Inicio}/>
          <Stack.Screen name="Coleccion" component={Coleccion}/>
          <Stack.Screen name="Productos" component={Productos}/>
          <Stack.Screen name="Pantalones" component={Pantalones}/>
        </Stack.Navigator>
      </NavigationContainer>
      
  );
}


const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.rosadoClaro,
  }
})

