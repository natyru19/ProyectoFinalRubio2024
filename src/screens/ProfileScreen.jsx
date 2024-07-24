import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { colors } from '../global/colors'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/shopServices'
import { clearUser } from '../features/UserSlice'


const ProfileScreen = ({navigation}) => {

  const dispatch = useDispatch()
  //const { truncateSessionTable } = useDB()
  const {imageCamera, localId} = useSelector((state) => state.auth.value)
  const {data: imageFromBase} = useGetProfileImageQuery(localId)
  
  const defaultImageRoute = "../../assets/img/noUser.png"

  const logOut =  async () => {
    if (Platform.OS !== "web") await truncateSessionsTable()
    dispatch(clearUser());
  }
  
  return (
    <View style={styles.container}>
      <Header title='Perfil' />
      {imageFromBase || imageCamera ? (
        <Image 
          style={styles.img}
          resizeMode='contain'
          source={{uri: imageFromBase?.image || imageCamera }}
        />
      )
      : (
      <Image 
        style={styles.img}
        resizeMode='contain'
        source={require(defaultImageRoute)}
      />
    )}
    <Pressable 
      onPress={() => navigation.navigate("ImageScreen")}
      style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}>
      {imageCamera ? <Text style={styles.text}>Cambiar foto</Text> : <Text style={styles.text}>Agregar foto</Text>}
    </Pressable>
    <Pressable 
      onPress={(logOut)}
      style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}>
      <Text style={styles.text}>Cerrar sesión</Text>
    </Pressable>
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