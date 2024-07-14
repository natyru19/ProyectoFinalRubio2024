import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackNavigator from './HomeStackNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../global/colors'
import LocationScreen from '../screens/LocationScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{tabBarShowLabel:false}}
    >
        <Tab.Screen name="tabHome" component={HomeStackNavigator} options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="home" color={focused ? '#007aff' : '#8e8e90'} size={ focused ? 36 : 33}  />
          ),
        }} />
        <Tab.Screen name="tabLocation" component={LocationScreen} options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="location"  color={focused ? '#007aff' : '#8e8e90'} size={ focused ? 30 : 27} />
          ),
        }}/> 
        <Tab.Screen name="tabProfile" component={ProfileScreen} options={{
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
      backgroundColor: colors.crema
    }
})