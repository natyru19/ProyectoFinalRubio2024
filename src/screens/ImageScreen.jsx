import { StyleSheet, View, Image } from 'react-native'
import { useState } from 'react'
import { colors } from '../global/colors'

const ImageScreen = () => {

 const [image, setImage] = useState(null)

 const verifyCameraPermisson = async () => {}

 const pickImage = async () => {}

 const confirmImage = () => {}

  return (
    <View style={styles.container}>
      {image ?
        <>
          <Image
            style={styles.img}
            resizeMode='contain'
            source={require('../../assets/img/user.jpg')}
          />
          <Pressable style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}>
          <Text>Agregar foto de perfil</Text>
        </Pressable>
        <Pressable style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}>
          <Text>Agregar foto de perfil</Text>
        </Pressable>
        </> :
        <>
          <View>
            <Text>No hay imagen para mostrar</Text>
          </View>
        </>
      }
    </View>
  )
}

export default ImageScreen

const styles = StyleSheet.create({
  container:{
    flex: 1
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