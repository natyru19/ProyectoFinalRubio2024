import { FlatList, StyleSheet, View } from 'react-native'
import products from '../data/products.json'
import ProductItem from '../components/ProductItem'
import Search from '../components/Search'
import { useEffect, useState } from 'react'

const ItemListScreen = ({navigation , route}) => {
    const {item} = route.params
    //filtrar de products los que product.category === item(item es la categoria que vino por prop, seleccionada por el user)
    
    const filteredProducts  = products.filter((product)=> product.category === item)
    const [keyWord, setKeyWord] = useState ('')
    const [searchedProducts, setSearchedProducts] = useState([filteredProducts]) 
    useEffect(() => {
      const keyWordFilteredProducts = filteredProducts.filter((product)=> product.name.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()))
      setSearchedProducts(keyWordFilteredProducts)
      }, [keyWord, setKeyWord])

    

 
  return (
    <View style={styles.container}>
      <Search keyWord={keyWord} setKeyWord = {setKeyWord} />
      <FlatList
        data={searchedProducts}
        renderItem={({item})=> <ProductItem item= {item}/>}
      >

      </FlatList>
    </View>
  )
}

export default ItemListScreen

const styles = StyleSheet.create({
  container:{
    alignItems:'center'
  }
})