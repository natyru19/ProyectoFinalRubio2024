import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import InputForm from "../components/InputForm";
import { useEffect, useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import { useSignInMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/UserSlice";


const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const [triggerSignIn, result] = useSignInMutation()

  useEffect(()=>{
    if(result.isSuccess) {
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken,
          localId: result.data.localId
        })
      )
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
        <Pressable style={styles.pressable} onPress={onSubmit}> 
          <Text style={styles.text}>Iniciar sesión</Text>
        </Pressable>
          
          <Pressable onPress={() => navigation.navigate("SignUpScreen")}>
            <Text >
            <Text style={styles.sub}>
              ¿Aún no tienes una cuenta?
            </Text>
            <Text style={styles.subLink}>
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
    backgroundColor: colors.grisOscuro
  },
  
  container: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.grisOscuro,
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
    backgroundColor: colors.grisClaro,
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    borderRadius: 5
},

sub:{
  fontSize: 14,
    fontFamily: "LibreBaskerville",
    color: "black",
    fontStyle: 'italic'
    
},
  subLink: {
    fontSize: 14,
    fontFamily: "LibreBaskerville",
    color: "black",
    textDecorationLine:'underline',
    paddingLeft: 10,
  }
});