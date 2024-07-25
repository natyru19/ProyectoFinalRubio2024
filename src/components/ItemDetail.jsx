import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { addShoppingCartItem } from "../features/ShoppingCartSlice"
import { colors } from "../global/colors";
import { addFavoriteItem } from "../features/FavoritesSlice";
import { useState } from "react";


const ItemDetail = ({ item }) => {
  const dispatch = useDispatch();
  const [inFavorites, setInFavorites] = useState(false)

  const handleAddShoppingCart = () => {
    dispatch(addShoppingCartItem);
    dispatch(addShoppingCartItem({ ...item, quantity: 1 }));
  };

  const handleAddFavorites = () => {
    console.log('Agregando a fav')
    dispatch(addFavoriteItem);
    dispatch(addFavoriteItem({ ...item, quantity: 1 }));
    setInFavorites(!inFavorites)
  };

  const handleRemoveFavorites =()=>{
    console.log('quitando de fav')
    //logica quitar
    setInFavorites(!inFavorites)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Image
        source={{ uri: item.img }}
        resizeMode="contain"
        style={styles.img}
      />
      <Text style={styles.desc}>{item.desc}</Text>
      <Text style={styles.price}>$ {item.price}</Text>
      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          { opacity: pressed ? 0.6 : 1 },
        ]}
        onPress={handleAddShoppingCart}
      >
        <Text style={styles.text}>Agregar al carrito</Text>
      </Pressable>

    {inFavorites ?
    <Pressable
        style={({ pressed }) => [
          styles.pressable,
          { opacity: pressed ? 0.6 : 1 },
      ]}
      onPress={handleRemoveFavorites}
    >
        <Text style={styles.text}>Quitar de favoritos</Text>
    </Pressable> :      
    <Pressable
      style={({ pressed }) => [
      styles.pressable,
        { opacity: pressed ? 0.6 : 1 },
      ]}
    onPress={handleAddFavorites}
    >
      <Text style={styles.text}>Agregar a favoritos</Text>
    </Pressable>}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    minWidth: "90%",
    backgroundColor: colors.fondo,
  },

  title: {
    alignSelf: "center",
    padding: 5,
    fontSize: 25,
    marginBottom: 3,
  },

  img: {
    height: 380,
    marginBottom: 8,
  },

  desc: {
    alignSelf: "center",
    padding: 5,
    fontSize: 15,
    marginBottom: 8,
  },

  price: {
    alignSelf: "flex-end",
    padding: 15,
    fontSize: 22,
  },

  pressable: {
    marginTop: 10,
    backgroundColor: colors.gris,
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 7,
    borderRadius: 5,
    alignSelf: "center",
  },

  text: {
    color: colors.azul,
  },
});
