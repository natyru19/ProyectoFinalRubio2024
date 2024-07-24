import { StyleSheet, View, FlatList, Pressable, Text } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import Header from "../components/Header";
import { colors } from "../global/colors";
//import { usePostOrderMutation } from '../services/shopServices';

const FavoritesScreen = ({ navigation }) => {
  const { items: products } = useSelector((state) => state.favorites.value);

  //const [triggerPostOrder, result] = usePostOrderMutation()

  // const onConfirmOrder = () => {
  //   triggerPostFav({items: products, user: "pepe@gmail.com"})
  // }

  const goToItemDetailScreen = (item) => {
    navigation.navigate("ItemDetailScreen", item);
  };

  return (
    <View style={styles.container}>
      <Header title="Favoritos" />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({ item }) => {
          return (
            <>
              <Pressable onPress={() => goToItemDetailScreen({ item })}>
                <ProductItem item={item} navigation={navigation} />
              </Pressable>
            </>
          );
        }}
      ></FlatList>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.fondo,
  },
});
