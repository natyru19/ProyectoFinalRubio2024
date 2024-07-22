import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native'
import FavoritesScreen from '../screens/FavoritesScreen'


const Stack = createNativeStackNavigator()

const FavoritesStackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
    >
      <Stack.Screen name="FavoritesScreen" component={FavoritesScreen}/>
    </Stack.Navigator>
  )
}

export default FavoritesStackNavigator

const styles = StyleSheet.create({})