import { StyleSheet, Text, Image, View } from 'react-native'


const ProductItem = ({item, navigation}) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.name}</Text>
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
    marginTop:10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    minWidth:'90%'
  },
  img:{
    height:200
  },
  text:{
    alignSelf:'center',
    padding:5,
    fontSize:20
  }
})