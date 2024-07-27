import { StyleSheet, View, FlatList, Pressable, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import Header from "../components/Header";
import { colors } from "../global/colors";
import { usePostOrderMutation } from "../services/shopServices";
import { emptyCart } from "../features/ShoppingCartSlice";


const ShoppingCartScreen = ({ navigation }) => {
  const { items: products, total } = useSelector((state) => state.shoppingCart.value);
  const {user} = useSelector((state) => state.auth.value)

  const [triggerPostOrder, result] = usePostOrderMutation()
  const dispatch = useDispatch()
  const onConfirmOrder = () => {
    triggerPostOrder({items: products, user, total})
    //dispatch(emptyCart())
    
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
                <Text style={{alignSelf: 'flex-end'}}>Cantidad: {item.quantity}</Text>
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
    borderRadius: 5,
    backgroundColor: colors.azul
  },

  textCompra: {
    alignSelf: 'center',
    color: colors.fondo
  },

  text: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.fondo
  }
});
