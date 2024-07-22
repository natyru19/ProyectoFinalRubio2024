import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native'
import ProfileScreen from '../screens/ProfileScreen'
import ImageScreen from '../screens/ImageScreen'


const Stack = createNativeStackNavigator()

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='ProfileScreen'
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
      <Stack.Screen name="ImageScreen" component={ImageScreen}/>
    </Stack.Navigator>
  )
}

export default ProfileStackNavigator

const styles = StyleSheet.create({})