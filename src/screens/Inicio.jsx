import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Inicio = ({navigation}) => {

    const irAColeccion = () => {
        navigation.navigate('Coleccion')
    }

  return (
    <View style={styles.container}>
      <Header />
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
        <View>
            <Button 
                title='Coleccion'
                onPress={() => irAColeccion()}
            />
        </View>
    </View>
  )
}

export default Inicio

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'yellow',
        height: '100%',
        //justifyContent: 'center'

    },
    titulo:{
        fontFamily: 'Diplomata',
        fontSize: 30,
        alignSelf: 'center',
        padding: 10
      },

      carrusel:{
        shadowOpacity: 0.5,
      },

      img:{
        height: 200,
        width: 400
      }
})