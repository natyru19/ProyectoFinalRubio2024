import { FlatList, Pressable, StyleSheet, Text } from 'react-native'
import categories from '../data/categories.json'
import { colors } from '../global/colors'

const Categories = ({navigation}) => {

  const goToItemList = (item)=>{
    navigation.navigate('ItemListScreen', item)
  }

  return (    
      <FlatList contentContainerStyle={styles.flat}
          data={categories}
          renderItem={({item})=> 
          <Pressable
            style={styles.pressable}
            onPress={()=>{goToItemList({item})}}
          >
            <Text>{item}</Text>
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
    backgroundColor:colors.verdeClaro
  },

  pressable:{
    height: 100,
    width: 100,
    backgroundColor:'white',
    margin: 20,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})