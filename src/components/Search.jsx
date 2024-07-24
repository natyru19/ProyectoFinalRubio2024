import { StyleSheet, View, TextInput, Pressable } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const Search = ({ keyWord, setKeyWord }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder=" Buscar"
        placeholderTextColor={colors.gris}
        value={keyWord}
        onChangeText={setKeyWord}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.fondo,
    height: 50,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  input: {
    backgroundColor: colors.fondo,
    borderWidth:1,
    borderColor: colors.azul,
    height: 40,
    width: "90%",
    borderRadius: 5,
    margin: 5,
  },
});
