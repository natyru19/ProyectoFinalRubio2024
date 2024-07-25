import { FlatList, Pressable, StyleSheet, Text } from 'react-native'
import { colors } from '../global/colors'
import { useGetCategoriesQuery } from '../services/shopServices'


const Categories = ({navigation}) => {

  const {data: categories} = useGetCategoriesQuery()

  const goToItemListScreen = (item)=>{
    navigation.navigate('ItemListScreen', item)
  }

  return (    
      <FlatList contentContainerStyle={styles.flat}
          data={categories}
          renderItem={({item})=> 
          <Pressable
            style={({pressed}) => [styles.pressable, {opacity: pressed ? 0.6 : 1}]}
            onPress={()=>{goToItemListScreen({item})}}
          >
            <Text style={styles.text}>{item}</Text>
          </Pressable>}          
      />
    
  )
}

export default Categories

const styles = StyleSheet.create({
  flat:{
    flexDirection: 'row',
    flex: 1,
    flexWrap:'wrap',
    justifyContent: 'center',
    alignItems:'center',
    alignContent:'center',
    backgroundColor:colors.azul
  },

  pressable:{
    height: 100,
    width: 100,
    backgroundColor: colors.gris,
    margin: 20,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text:{
    color: colors.azul,
    fontSize: 16
  }
})