import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'grey',
        padding: 3,
        margin: 4,
        borderRadius: 4,
        alignItems: 'center'
    }
})