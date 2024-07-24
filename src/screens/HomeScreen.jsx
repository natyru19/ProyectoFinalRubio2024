import { StyleSheet, View, ScrollView, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import { colors } from '../global/colors'


const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.carrusel}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                source={require('../../assets/img/newCollection.jpg')}
                style={styles.img}
                resizeMode='cover'
              />
            </View>
            <View>
              <Image
                source={require('../../assets/img/abrigos.jpg')}
                style={styles.img}
                resizeMode='cover'
              />  
            </View>
            <View>
              <Image
                source={require('../../assets/img/buzos.jpg')}
                style={styles.img}
                resizeMode='cover'
              />
            </View>
            <View>
              <Image
                source={require('../../assets/img/sale.jpg')}
                style={styles.img}
                resizeMode='cover'
              />  
            </View>
            <View>
              <Image
                source={require('../../assets/img/pantalones.jpg')}
                style={styles.img}
                resizeMode='cover'
              />
            </View>     
      </ScrollView>
      </View>
      <Categories navigation={navigation}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      height: '100%',
      backgroundColor: colors.azul
    },
    
    carrusel:{
      shadowOpacity: 0.5
    },

    img:{
      height: 200,
      width: 400
    },
})