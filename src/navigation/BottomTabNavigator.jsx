import { StyleSheet } from 'react-native'
import HomeStackNavigator from './HomeStackNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../global/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import ProfileStackNavigator from './ProfileStackNavigator';
import { Octicons } from '@expo/vector-icons';
import OrderScreen from '../screens/OrderScreen';
import ShoppingCartStackNavigator from './ShoppingCartStackNavigator';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{tabBarShowLabel:false, headerShown:false, tabBarStyle: styles.tabBar}}
    >
        <Tab.Screen name="Inicio" component={HomeStackNavigator} options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="home" color={focused ? '#007aff' : '#8e8e90'} size={ focused ? 36 : 33}  />
          ),
        }} /> 
        <Tab.Screen name="Carrito" component={ShoppingCartStackNavigator} options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons name="cart" color={focused ? '#007aff' : '#8e8e90'} size={ focused ? 36 : 33} />
          ),
        }} />
        <Tab.Screen name="Compras" component={OrderScreen} options={{
          tabBarIcon: ({ focused }) => (
            <Octicons name="checklist" color={focused ? '#007aff' : '#8e8e90'} size={ focused ? 30 : 27} />
          ),
        }}/>
        <Tab.Screen name="Favoritos" component={FavoritesScreen} options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name="heart" color={focused ? '#007aff' : '#8e8e90'} size={ focused ? 30 : 27} />
          ),
        }} />
        <Tab.Screen name="Perfil" component={ProfileStackNavigator} options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons name="account" color={focused ? '#007aff' : '#8e8e90'} size={ focused ? 36 : 33} />
          ),
        }} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'grey',
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginVertical: '90%'
    },

    tabBar:{
      backgroundColor: colors.azul
    }
})
