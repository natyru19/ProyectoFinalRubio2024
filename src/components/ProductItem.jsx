import { StyleSheet, Text, Image, View } from 'react-native'


const ProductItem = ({item}) => {
  
  return (
    <View style={styles.container}>
      
      <Text style={styles.txt}>{item.name}</Text>
      <Image
        source={{uri: item.img}}
        resizeMode='contain'
        style={styles.img}
      />
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    minWidth:'90%'
  },
  img:{
    height:200
  },
  txt:{
    alignSelf:'center',
    padding:5,
    fontSize:20
  }
})