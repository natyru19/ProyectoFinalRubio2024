import { FlatList, Pressable, StyleSheet, View } from "react-native";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import { useGetProductsByCategoryQuery } from "../services/shopServices";
import { colors } from "../global/colors";

const ItemListScreen = ({ navigation, route }) => {
  const { item: category } = route.params;

  const { data: products, isLoading } = useGetProductsByCategoryQuery(category);

  const goToItemDetailScreen = (item) => {
    navigation.navigate("ItemDetailScreen", item);
  };

  const [keyWord, setKeyWord] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      const keyWordFilteredProducts = products.filter((product) =>
        product.name.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
      );
      setSearchedProducts(keyWordFilteredProducts);
    }
  }, [keyWord, products, isLoading]);

  return (
    <View style={styles.container}>
      <Search
        keyWord={keyWord}
        setKeyWord={setKeyWord}
        navigation={navigation}
      />
      <FlatList
        data={searchedProducts}
        renderItem={({ item }) => (
          <Pressable onPress={() => goToItemDetailScreen({ item })} style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}>
            <ProductItem item={item} navigation={navigation} />
          </Pressable>
        )}
      ></FlatList>
    </View>
  );
};

export default ItemListScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.fondo,
  },
});
