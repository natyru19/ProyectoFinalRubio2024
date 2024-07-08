import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'


const Coleccion = ({title, navigation}) => {

  const verProductos = () => {
    navigation.navigate('Productos')
  }

  const Jeans = () => {
    navigation.navigate('Jeans')
}

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>{title}</Text>
      <Categories />      
      <View>
        <Button 
          color='green'
          title="VER PRODUCTOS"
          onPress={() => verProductos()}
        />
      </View>
    </View>
  )
}

export default Coleccion

const styles = StyleSheet.create({
    text:{
      fontFamily: 'LibreBaskerville',
      fontSize: 20,
      alignSelf: 'center',
      padding: 10
    },

    container:{
      backgroundColor: 'orange',
      height: '90%'
    }
})