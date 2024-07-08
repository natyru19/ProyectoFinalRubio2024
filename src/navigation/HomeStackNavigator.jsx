import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Inicio from '../screens/Inicio'
import Coleccion from '../screens/Coleccion'
import Productos from '../screens/Productos'
import Pantalones from '../screens/Pantalones'

const Stack = createNativeStackNavigator()

const HomeStackNavigator = () => {
  return (
    
        <Stack.Navigator initialRouteName='Inicio'>
          <Stack.Screen name="Inicio" component={Inicio}/>
          <Stack.Screen name="Coleccion" component={Coleccion}/>
          <Stack.Screen name="Productos" component={Productos}/>
          <Stack.Screen name="Pantalones" component={Pantalones}/>
        </Stack.Navigator>
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})