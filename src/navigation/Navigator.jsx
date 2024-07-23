
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomTabNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import { useSelector } from 'react-redux'

//{user ? <BottomTabNavigator/> : <AuthStackNavigator/>}
//<BottomTabNavigator/>
const Navigator = () => {

  const { user } = useSelector((state) => state.auth.value)
 
  return (
    <NavigationContainer>
      {user ? <BottomTabNavigator/> : <AuthStackNavigator/>}
    </NavigationContainer>
  )
}

export default Navigator

