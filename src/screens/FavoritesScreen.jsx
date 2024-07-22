import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native'
import { useSelector } from 'react-redux';
import ProductItem from '../components/ProductItem';
import { colors } from '../global/colors'
import Header from '../components/Header';


const FavoritesScreen = ({navigation}) => {

   const {items: products} = useSelector((state) => state.favorites.value)

  const displayBtn = (false)

   const goToItemDetailScreen = (item, displayBtn)=>{
    navigation.navigate('ItemDetailScreen', item, displayBtn)
  }
    

  return (
    <View style={styles.container}>
      <Header title='Favoritos' />
      
      <FlatList
        data={products}
        renderItem={({item})=>{
            return <>
            <Pressable onPress={()=>goToItemDetailScreen({item, displayBtn})}>
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