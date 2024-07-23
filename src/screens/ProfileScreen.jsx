import { useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { colors } from '../global/colors'
import Header from '../components/Header'


const ProfileScreen = ({navigation}) => {

  const [image, setImage] = useState(null)
  

  return (
    <View style={styles.container}>
      <Header title='Perfil' />
      {image ?
        null :
        <>
        <Image 
          style={styles.img}
          resizeMode='contain'
          source={require("../../assets/img/user.jpg")}
        />
        <Pressable 
          onPress={() => navigation.navigate("ImageScreen")}
          style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}>
          <Text style={styles.text}>Cambiar foto de perfil</Text>
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
    height: 150,
    width: 150,
    marginVertical: 20,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: colors.grisClaro,
    shadowColor: "#000",
    shadowOffset:{
      width: 0,
      height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8,
  },

  pressable:{
    marginTop: 10,
    backgroundColor: colors.crema,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: "80%",
    height: 40,
    paddingVertical: 7
  },

  text:{
    color: 'grey'
  }
})