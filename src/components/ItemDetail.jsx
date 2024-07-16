import { StyleSheet, Text, View, Image } from 'react-native'

const ItemDetail = ({item}) => {
  return (
        <View style={styles.container}>
          <Text style={styles.title}>{item.name}</Text>
          <Image
            source={{uri: item.img}}
            resizeMode='contain'
            style={styles.img}
          />
          <Text style={styles.desc}>{item.desc}</Text>
          <Text>Cantidad disponible: {item.stock}</Text>
          <Text style={styles.price}>$ {item.price}</Text>
            
        </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    container:{
        //backgroundColor:'yellow',
        flex:1,
        marginTop:10,
        minWidth:'90%'
      },
      title:{
        alignSelf:'center',
        padding:5,
        fontSize:25,
        marginBottom:5
      },
      img:{
        height:380,
        marginBottom:10
      },
      desc:{
        alignSelf:'center',
        padding:5,
        fontSize:20,
        marginBottom:10
      },
      price:{
        alignSelf:'flex-end',
        padding:15,
        fontSize:25
      }

})