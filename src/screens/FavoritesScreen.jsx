import { StyleSheet, View, FlatList, Pressable } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import Header from "../components/Header";
import { colors } from "../global/colors";


const FavoritesScreen = ({ navigation }) => {
  const { items: products } = useSelector((state) => state.favorites.value)
  
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
                <ProductItem item={item} navigation={navigation}/>
              </Pressable>
            </>
          );
        }}
        keyExtractor={(producto) => producto.id}
      >
      </FlatList>
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
