import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from '../data/categories.json'
import CategoryItem from './CategoryItem'
import { colors } from '../global/colors'

const Categories = () => {
  return (
    <View style={styles.categoriesContainer}>      
      <FlatList
        keyExtractor={category => category}
        data={categories}
        renderItem={({item}) => <CategoryItem 
          category={item}/>}          
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  categoriesContainer:{
    backgroundColor:colors.verdeClaro,
    alignItems:'center'
  }
})