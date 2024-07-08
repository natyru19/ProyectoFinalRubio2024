import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import HomeStackNavigator from './HomeStackNavigator'

const Navigator = () => {
  return (
    <NavigationContainer>
        <HomeStackNavigator />
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})