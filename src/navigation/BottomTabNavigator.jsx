import { StyleSheet } from 'react-native'
import HomeStackNavigator from './HomeStackNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../global/colors'
import LocationScreen from '../screens/LocationScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import ProfileStackNavigator from './ProfileStackNavigator';
import FavoritesStackNavigator from './FavoritesStackNavigator';

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{tabBarShowLabel:false, headerShown:false, tabBarStyle: styles.tabBar}}
    >
        <Tab.Screen name="Home" component={HomeStackNavigator} options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="home" color={focused ? '#007aff' : '#8e8e90'} size={ focused ? 36 : 33}  />
          ),
        }} />
        <Tab.Screen name="Location" component={LocationScreen} options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="location"  color={focused ? '#007aff' : '#8e8e90'} size={ focused ? 30 : 27} />
          ),
        }}/> 
        <Tab.Screen name="Profile" component={ProfileStackNavigator} options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons name="account" color={focused ? '#007aff' : '#8e8e90'} size={ focused ? 36 : 33} />
          ),
        }} /><Tab.Screen name="Favorites" component={FavoritesStackNavigator} options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name="heart" color={focused ? '#007aff' : '#8e8e90'} size={ focused ? 30 : 27} />
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
      backgroundColor: colors.marronClaro
    }
})
