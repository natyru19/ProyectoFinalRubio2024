import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import products from '../data/products.json'
import Header from '../components/Header'
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'
import Home from '../components/Search'

const ItemListCategory = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Detalle</Text>
        <Search />      
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },

    text:{
        fontFamily: 'LibreBaskerville',
      fontSize: 20,
    }
})