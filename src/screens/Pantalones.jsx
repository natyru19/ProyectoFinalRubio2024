import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'

const Pantalones = ({navigation}) => {

//   const volver = () => {
//     navigation.goBack()
// }

  return (
    <View>
      <Image
        source={require('../../assets/img/pantalones.jpg')}
        style={styles.img}
        resizeMode='cover'
      />
      {/* <View>
      <Button 
          title='Volver'
          onPress={() => volver()}
      />
      </View> */}
    </View>
    
    
  )
}

export default Pantalones

const styles = StyleSheet.create({
  img:{
    height: 200,
    width: '100%'
  }
})