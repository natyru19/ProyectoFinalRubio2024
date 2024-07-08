import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.container}>
        <Pressable style={styles.pressable}
        onPress={()=>Home()}>
            <Entypo name="home" size={30} color="black" />
        </Pressable>
        <Pressable style={styles.pressable}>
        <Entypo name="location-pin" size={33} color="black" />
        </Pressable>
        <Pressable style={styles.pressable}>
        <Ionicons name="person" size={30} color="black" />
        </Pressable>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'grey',
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginVertical: '90%'
    }
})