import { StyleSheet, View, ScrollView, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'


const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.carrusel}>
      <ScrollView horizontal>
                
            <View>
                <Image
                    source={require('../../assets/img/sale.jpg')}
                    style={styles.img}
                    resizeMode='cover'
                />
            </View>
            <View>
                <Image
                    source={require('../../assets/img/newCollection.jpg')}
                    style={styles.img}
                    resizeMode='cover'
                />
            </View>
            <View>
                <Image
                    source={require('../../assets/img/percheroRopa.jpg')}
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
      backgroundColor: 'yellow',
      height: '100%'
    },
    
    carrusel:{
      shadowOpacity: 0.5
    },

    img:{
      height: 200,
      width: 400
    },
})