import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { colors } from "../global/colors";
import InputForm from "../components/InputForm";
import { useSignUpMutation } from '../services/authService';
import { useDispatch } from "react-redux";
import { setUser } from '../features/UserSlice'
import { signupSchema } from "../validations/signUpSchema";


const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const dispatch = useDispatch()
  const [triggerSignUp, result] = useSignUpMutation()

  useEffect(()=>{
    if(result.isSuccess) {
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken,
          localId: result.data.localId,
        })
      )
    }
  }, [result])

  const onSubmit = () => {

    try {
      setErrorMail("");
      setErrorPassword("");
      setErrorConfirmPassword("");
      signupSchema.validateSync({ email, password, confirmPassword })
      triggerSignUp({ email, password, returnSecureToken: true })
    
    } catch (err) {
        switch (err.path) {
          case "email":
            setErrorMail(err.message);
          case "password":
            setErrorPassword(err.message);
          case "confirmPassword":
            setErrorConfirmPassword(err.message);
          default:
            break;
        }
      }
  }

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Regístrate</Text>
        <InputForm 
            label={"Usuario"} 
            onChange={setEmail} 
            error={errorMail} 
        />
        <InputForm
          label={"Contraseña"}
          onChange={setPassword}
          error={errorPassword}
          isSecure={true}
        />
        <InputForm
          label={"Confirmar contraseña"}
          onChange={setconfirmPassword}
          error={errorConfirmPassword}
          isSecure={true}
        />
        <Pressable style={styles.pressable} onPress={onSubmit}>
           <Text style={styles.textAceptar}>Aceptar</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("LoginScreen")}>
          <Text>
            <Text style={styles.text}>
              ¿Ya tienes una cuenta?
            </Text>
            <Text style={styles.textIniciaSesion}>
              Inicia sesión
            </Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUpScreen;

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
    backgroundColor: colors.azul,
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10
  },

  title: {
    fontSize: 22,
    fontFamily: "LibreBaskerville"
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

textAceptar:{
  color: colors.azul,
  fontSize: 16
},

text:{
  fontSize: 14,
    fontFamily: "LibreBaskerville",
    color: "black",
    fontStyle: 'italic'
    
},

textIniciaSesion: {
    fontSize: 14,
    fontFamily: "LibreBaskerville",
    color: "black",
    textDecorationLine:'underline',
    paddingLeft: 10,
  }
});