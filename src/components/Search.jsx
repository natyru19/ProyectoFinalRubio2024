import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'


const Search = ({keyWord, setKeyWord }) => {

  return (
    
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Buscar"
            value={keyWord}
            onChangeText={setKeyWord}
        />      
        
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: 'red',
        height: 50,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems:'center'
    },

    input:{
        backgroundColor: colors.crema,
        height: 40,
        width: '90%',
        borderRadius: 5,
        margin: 5,
    },

    pressable:{
        flexDirection: 'row',
        
    }
})