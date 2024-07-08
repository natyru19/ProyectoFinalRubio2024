import { StyleSheet, Text, View, Image, ScrollView, Button, FlatList, Pressable } from 'react-native'
import React from 'react'
import Header from '../components/Header'


const Productos = ({navigation}) => {

    const volver = () => {
        navigation.goBack()
    }

    const Pantalones = () => {
        navigation.navigate('Pantalones')
    }

  return (
    <View style={styles.container}>
        <Header/>        
        <ScrollView>
            <View style={styles.cardContainer}>                
                <View style={styles.card}>
                    <Button 
                        style={styles.button} 
                        color="green" 
                        title='PANTALONES'
                        onPress={() => Pantalones()}
                    />                
                    <Image 
                        source={require('../../assets/img/pantalones.jpg')}
                        style={styles.imagen}
                        resizeMode='cover'
                    />                    
                </View>
                <View style={styles.card}>
                    <Button style={styles.button} color="green" title="REMERAS"/>                
                    <Image 
                        source={require('../../assets/img/remeras.jpg')}
                        style={styles.imagen}
                        resizeMode='cover'
                    />                    
                </View>                
                <View style={styles.card}>
                    <Button style={styles.button} color="green" title="ABRIGOS"/>                
                    <Image 
                        source={require('../../assets/img/abrigos.jpg')}
                        style={styles.imagen}
                        resizeMode='cover'
                    />                    
                </View>
                <View style={styles.card}>
                    <Button style={styles.button} color="green" title="BUZOS"/>                
                    <Image 
                        source={require('../../assets/img/buzos.jpg')}
                        style={styles.imagen}
                        resizeMode='cover'
                    />                    
                </View>                
            </View>
        </ScrollView>
        <View>
            <Button 
                title='Volver'
                onPress={() => volver()}
            />
        </View>
    </View>
  )
}

export default Productos

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red',
        alignItems: 'center',
        height: '90%',
        //width: '100%'
    },    

    cardContainer:{
        backgroundColor: 'green',
        //width: '100%',
        //height: '100%',
    },

    card:{
        backgroundColor: 'blue',
        //height: 200,
        //width: 200,
        margin: 10,
        //borderRadius: 'black',
        flexDirection: 'row'
    },
    
    imagen:{
        height: 200,
        width: 200,
        //alignSelf: 'center',
        borderRadius: 100
    }
})