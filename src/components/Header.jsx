import { StyleSheet, Text, View, Image, Platform } from 'react-native'


const Header = () => {
  return (
        <View style={styles.container}>
            <Image 
            source={require('../../assets/img/header.jpg')}
            style={styles.header}
            resizeMode='cover'
            />
        </View>              
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        height:100,
        width:'100%',        
        backgroundColor:'red',
        paddingTop: Platform.OS === 'ios' ? 0 : 48

    },
        header:{
            width:'100%',
            height:100            
    }
})