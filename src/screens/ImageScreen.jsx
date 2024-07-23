import { StyleSheet, View, Image, Text, Pressable } from 'react-native'
import { useState } from 'react'
import { colors } from '../global/colors'
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';
import { setCameraImage } from '../features/UserSlice';

const ImageScreen = () => {

 const [image, setImage] = useState(null)
 const dispatch = useDispatch()

 const verifyCameraPermisson = async () => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync()
  if (!status) {
    return false
  }
  return true
 }

 const pickImage = async () => {

  const isCameraOK = await verifyCameraPermisson()
  if(isCameraOK) {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      base64: true,
      quality: 0.2,
    });

    if (!result.canceled) {
      setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
    }
  }
 }

 const confirmImage = () => {
  dispatch(setCameraImage({image, localId}))
  navigation.navigate()
 }

  return (
    <View style={styles.container}>
      {image ?
        <>
          <Image
            style={styles.img}
            resizeMode='contain'
            source={{uri: image}}
          />
          <Pressable
            onPress={pickImage} 
            style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}>
            <Text style={styles.text}>Sacar una nueva foto</Text>
          </Pressable>
          <Pressable
            onPress={confirmImage} 
            style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}>
            <Text style={styles.text}>Confirmar foto</Text>
          </Pressable>
        </> 
        :
        <>
          <View style={styles.viewPhoto}>
            <Image
              style={styles.img}
              resizeMode='contain'
              source={require("../../assets/img/noUser.png")}
            />
          </View>
          <Pressable
            onPress={pickImage} 
            style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}>
            <Text style={styles.text}>Sacar una foto</Text>
          </Pressable>
        </>
      }
    </View>
  )
}

export default ImageScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
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

  img:{
    height: 150,
    width: 150,
    marginVertical: 20,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: colors.grisClaro,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },

  viewPhoto:{
    marginVertical: 20,
    height: 150,
    width: 150,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: colors.grisClaro,
    justifyContent: 'center'
  },
  text:{
    color: 'grey'
  }
})