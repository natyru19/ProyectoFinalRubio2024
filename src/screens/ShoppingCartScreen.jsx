import { StyleSheet, View, FlatList, Pressable, Text } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import Header from "../components/Header";
import { colors } from "../global/colors";
import { usePostOrderMutation } from "../services/shopServices";


const ShoppingCartScreen = ({ navigation }) => {
  const { items: products, total } = useSelector((state) => state.shoppingCart.value);

  const [triggerPostOrder, result] = usePostOrderMutation()

  const onConfirmOrder = () => {
    triggerPostOrder({items: products, user: "pepe@gmail.com", total})
  }


  return (
    <View style={styles.container}>
      <Header title="Carrito" />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({ item }) => {
          return (
            <>
              <Pressable>
                <ProductItem item={item} navigation={navigation}/>
              </Pressable>
            </>
          );
        }}
        keyExtractor={(producto) => producto.id}
      >
      </FlatList>
      <View style={styles.containerPressable}>
        <Pressable onPress={onConfirmOrder} style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}>
            <Text style={styles.textCompra}>Realizar compra</Text>
            <Text> </Text>
            <Text style={styles.text}>Total: $ {total}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ShoppingCartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.fondo,
  },

  containerPressable: {
    borderTopWidth: 2,
    borderTopColor: colors.azul,
    width: "100%"
  },

  pressable: {
    margin: 20,
    padding: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.azul,
    borderRadius: 5
  },

  textCompra: {
    alignSelf: 'center'
  },

  text: {
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});
