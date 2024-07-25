import { FlatList, StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import OrderItem from '../components/OrderItem'
import { useGetOrdersByUserQuery } from '../services/shopServices'

const OrderScreen = () => {

  const { data: OrderData, isLoading } = useGetOrdersByUserQuery("pepe@gmail.com")

  return (
    <View>
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

const styles = StyleSheet.create({})