import { FlatList, StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import OrderItem from '../components/OrderItem'
import { useGetOrdersByUserQuery } from '../services/shopServices'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'

const OrderScreen = () => {

  const {user} = useSelector((state) => state.auth.value)
  const { data: OrderData, } = useGetOrdersByUserQuery(user)

  return (
    <View style={styles.container}>
      <Header title='Compras' />
      <FlatList
        data={OrderData}
        keyExtractor={(orderItem) => orderItem}
        renderItem={({ item }) => {
          return <OrderItem order={item} />;
        }}
      />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.fondo
  }
})