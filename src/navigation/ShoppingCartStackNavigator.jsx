import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import ShoppingCartScreen from '../screens/ShoppingCartScreen'


const Stack = createNativeStackNavigator()

const ShoppingCartStackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
    >
      <Stack.Screen name="ShoppingCartScreen" component={ShoppingCartScreen}/>
    </Stack.Navigator>
  )
}

export default ShoppingCartStackNavigator

const styles = StyleSheet.create({})