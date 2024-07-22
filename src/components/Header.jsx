import { StyleSheet, Text, View, Platform } from 'react-native'
import { colors } from '../global/colors'


const Header = ({title}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
    </View>             
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        height: 100,
        width: '100%',        
        backgroundColor: colors.marronClaro,
        paddingTop: Platform.OS === 'ios' ? 0 : 48,
        justifyContent: 'center',
        alignItems: 'center'

    },

    text: {
        color: colors.grisClaro,
        fontSize: 22,
        fontFamily: 'Diplomata'
      }
})