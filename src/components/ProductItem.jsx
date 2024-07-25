import { StyleSheet, Text, Image, View } from "react-native";
import { colors } from "../global/colors";

const ProductItem = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.name}</Text>
      <Image
        source={{ uri: item.img }}
        resizeMode="contain"
        style={styles.img}
      />
      <Text style={styles.textPrice}>$ {item.price}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderColor: colors.azul,
    borderWidth: 1,
    borderRadius: 20,
    minWidth: "90%",
    backgroundColor: colors.fondo,
  },

  img: {
    height: 200,
  },

  text: {
    alignSelf: "center",
    padding: 5,
    fontSize: 20,
  },

  textPrice:{
    alignSelf: 'center',
    padding: 5,
    fontSize: 16
  }
});
