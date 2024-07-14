import { StyleSheet} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import ItemListScreen from '../screens/ItemListScreen'


const Stack = createNativeStackNavigator()

const HomeStackNavigator = () => {
  return (
    
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="ItemListScreen" component={ItemListScreen}/>
        </Stack.Navigator>
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})