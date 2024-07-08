import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({category, selectCategory = ()=> {}}) => {
  return (
    <Card>
      <Pressable onPress= {() => selectCategory(category)}  >
        <Text>{category}</Text>
      </Pressable>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({})