import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";



const OrderItem = ({ order }) => {
  
  const total = order.items.reduce(
    (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
    0
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.orderInfoContainer}>
        
        {order.items.map(
          (item)=> 
            <View style={{flexDirection:'row'}}>
            <Image source={{uri: item.img}} style={{height:20, width:20}}></Image>
            <Text>{item.name} ({item.quantity} un.)</Text>
            </View>
          )
        }
        <Text> </Text>
        <Text>$ {order.total}</Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.azul,
    backgroundColor: colors.fondo,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: 'center'
  },

  orderInfoContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  }
});