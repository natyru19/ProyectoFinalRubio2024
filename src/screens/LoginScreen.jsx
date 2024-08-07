import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import InputForm from "../components/InputForm";
import { useEffect, useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import { useSignInMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/UserSlice";
import { insertSession } from "../persistence";


const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const [triggerSignIn, result] = useSignInMutation()

  useEffect(()=>{
    if(result?.data && result.isSuccess) {
      insertSession({
        email: result.data.email,
        localId: result.data.localId,
        token: result.data.idToken,
      }).then((response) => {
        
        dispatch(
          setUser({
            email: result.data.email,
            idToken: result.data.idToken,
            localId: result.data.localId,
          })
        )
      }).catch(err => {
        
      })
    }
  }, [result])

  const onSubmit = ()=> {
    triggerSignIn({email, password, returnSecureToken: true})
  }

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Inicia sesión</Text>
        <View style={styles.viewInput}>
          <MaterialCommunityIcons name="account" size={26} color="black" />
          <InputForm
            onChange={setEmail} 
            error={""}
          />
        </View>
        <View style={styles.viewInput}>
          <Ionicons name="lock-closed" size={24} color="black" />
          <InputForm
            onChange={setPassword}
            error={""}
            isSecure={true}
          />
        </View>
        <Pressable 
          style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]} 
          onPress={onSubmit}> 
          <Text style={styles.textIniciarSesion}>Iniciar sesión</Text>
        </Pressable>
          
          <Pressable 
            onPress={() => navigation.navigate("SignUpScreen")}
            style={({pressed}) => [styles.text, {opacity: pressed ? 0.6 : 1}]}>
            <Text>
            <Text style={styles.text}>
              ¿Aún no tienes una cuenta?
            </Text>
            <Text> </Text>
            <Text style={styles.textRegistrate}>
              Regístrate
            </Text>
          </Text>
          </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:colors.azul
  },
  
  container: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:colors.azul,
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10
  },

  title: {
    fontSize: 22,
    fontFamily: "LibreBaskerville"
  },

  viewInput:{
    flexDirection: 'row',
    alignItems: 'center'
  },

  pressable:{
    marginTop: 10,
    backgroundColor: colors.gris,
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    borderRadius: 5
},

textIniciarSesion: {
  color: colors.azul,
  fontSize: 16
},

text:{
  fontSize: 14,
    fontFamily: "LibreBaskerville",
    color: "black",
    fontStyle: 'italic'
    
},
textRegistrate: {
    fontSize: 14,
    fontFamily: "LibreBaskerville",
    color: "black",
    textDecorationLine:'underline'
  }
});