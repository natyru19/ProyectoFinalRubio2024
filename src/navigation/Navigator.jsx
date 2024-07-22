
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomTabNavigator'
import AuthStackNavigator from './AuthStackNavigator'
//import { useState } from 'react'
import { useSelector } from 'react-redux'

//{user ? <BottomTabNavigator/> : <AuthStackNavigator/>}
const Navigator = () => {

  const { user } = useSelector((state) => state.auth.value)
 
  return (
    <NavigationContainer>
        <BottomTabNavigator/>
    </NavigationContainer>
  )
}

export default Navigator

