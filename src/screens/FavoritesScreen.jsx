import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native'
import { useSelector } from 'react-redux';
import ProductItem from '../components/ProductItem';


const FavoritesScreen = ({navigation}) => {

   const {items: products} = useSelector((state) => state.favorites.value)
   const goToItemDetailScreen = (item)=>{
    navigation.navigate('ItemDetailScreen', item)
  }
    

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item})=>{
            return <>
            <Pressable onPress={()=>{console.log(item.name)}}>
              <ProductItem item={item} navigation={navigation}/>

            </Pressable>
            </>
        }}  
      >
      </FlatList>
    </View>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center'
  }
})