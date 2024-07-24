import { StyleSheet} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import ItemListScreen from '../screens/ItemListScreen'
import ItemDetailScreen from '../screens/ItemDetailScreen'
import { colors } from '../global/colors'


const Stack = createNativeStackNavigator()

const HomeStackNavigator = () => {
  return (
    
        <Stack.Navigator 
          initialRouteName="HomeScreen" screenOptions={{headerStyle: styles.header, headerTitleStyle: styles.headerTitle, headerTintColor: colors.gris}}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: "Inicio"}}/>
          <Stack.Screen name="ItemListScreen" component={ItemListScreen} options={{title: "Lista de Productos"}}/>
          <Stack.Screen name="ItemDetailScreen" component={ItemDetailScreen} options={{title: "Detalles"}}/>
        </Stack.Navigator>
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({
  header:{
    backgroundColor: colors.azul
  },
  headerTitle:{
    color: colors.gris
  }
})