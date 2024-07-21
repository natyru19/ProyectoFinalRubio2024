import { StyleSheet, Text, View, FlatList } from 'react-native'
import ItemDetail from '../components/ItemDetail'


const ItemDetailScreen = ({navigation, route}) => {
  const {item} = route.params
  return (
    <View style={styles.container}>
      <ItemDetail item={item} />
    </View>
  )
}

export default ItemDetailScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center'
    },

    text:{
        fontFamily: 'LibreBaskerville',
      fontSize: 20,
    }
})