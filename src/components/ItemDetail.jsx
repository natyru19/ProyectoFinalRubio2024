import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import { addFavoriteItem } from '../features/FavoritesSlice'
import { colors } from '../global/colors'


const ItemDetail = ({item}) => {

  const dispatch = useDispatch()

  const handleAddFavorites = () => {
    dispatch(addFavoriteItem)
    dispatch(addFavoriteItem({...item, quantity: 1})) 
  }

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
          <Pressable
            style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}            
            onPress={handleAddFavorites}>
            <Text>Agregar a favoritos</Text>
          </Pressable>
            
        </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    container:{
        //backgroundColor:'yellow',
        flex:1,
        marginTop:8,
        minWidth:'90%'
      },

      title:{
        alignSelf:'center',
        padding:5,
        fontSize:25,
        marginBottom:3
      },

      img:{
        height:380,
        marginBottom:8
      },

      desc:{
        alignSelf:'center',
        padding:5,
        fontSize:15,
        marginBottom:8
      },

      price:{
        alignSelf:'flex-end',
        padding:15,
        fontSize:22
      },

      pressable:{
        marginTop: 10,
        backgroundColor: colors.grisClaro,
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        borderRadius: 5,
        alignSelf:'center'
    }
})