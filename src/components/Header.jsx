import { StyleSheet, Text, View } from 'react-native'
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
        height: 63,
        width: '100%',        
        backgroundColor: colors.azul,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: colors.crema2,
        fontSize: 22,
        fontFamily: 'Diplomata'
      }
})