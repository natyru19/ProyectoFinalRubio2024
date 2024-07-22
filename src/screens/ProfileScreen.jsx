import { useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { colors } from '../global/colors'
import Header from '../components/Header'


const ProfileScreen = () => {

  const [image, setImage] = useState(null)
  

  return (
    <View style={styles.container}>
      <Header title='Perfil' />
      {image ?
        null :
        <>
        <Image 
          style={styles.img}
          resizeMode='cover'
          source={require("../../assets/img/user.jpg")}
        />
        <Pressable style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}>
          <Text>Agregar foto de perfil</Text>
        </Pressable>
        </>
      }
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center'
  },

  img:{
    height: 100,
    width: 100
  },

  pressable:{
    marginTop: 10,
    backgroundColor: colors.crema,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: "80%",
    paddingVertical: 7
  }
})