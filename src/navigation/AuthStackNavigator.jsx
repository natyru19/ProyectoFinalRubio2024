import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'


const Stack = createNativeStackNavigator()

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
        headerShown: false
        }}
    >
        <Stack.Screen component={LoginScreen} name="LoginScreen" />
        <Stack.Screen component={SignUpScreen} name="SignUpScreen" />
    </Stack.Navigator>
  )
}

export default AuthStackNavigator

const styles = StyleSheet.create({})