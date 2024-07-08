import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../global/colors'


const Search = ({goBack=()=>{}}) => {
    
    const [keyWord, setKeyWord] = useState ('')

  return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Buscar"
            value={keyWord}
            onChangeText={setKeyWord}
        />      
        <Pressable style={styles.pressable}>
            <EvilIcons name="search" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.pressable}>
            <EvilIcons name="trash" size={24} color="black" />
        </Pressable>
        <Pressable onPress={goBack} style={styles.pressable}>
        <MaterialCommunityIcons name="keyboard-backspace" size={20} color="black" />
        </Pressable>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },

    input:{
        backgroundColor: colors.crema,
        height: 20,
        width: '70%',
        borderRadius: 5,
        margin: 5,
    },

    pressable:{
        flexDirection: 'row',
        
    }
})