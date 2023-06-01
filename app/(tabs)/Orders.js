import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'expo-router'
import { completeOrder, getOrders, revokeOrder } from '../../API/funcs'
import AppContext from '../../func/AppContext'

const getOrdersCall = async () => {
  const result = await getOrders()
  return result
}

const revokeOrderCall = async ({ postingId }) => {
  const result = await revokeOrder({ postingId })
  return result
}

const completeOrderCall = async ({ postingId }) => {
  const result = await completeOrder({ postingId })
  return result
}

const orders = () => {
  const { account } = useContext(AppContext)
  const pathname = usePathname()
  const [orders, setOrders] = useState([])
  useEffect(() => {
    const getOrdersAsync = async () => {
      const result = await getOrdersCall()
      console.log('result', result)
      setOrders(result)
    }
    getOrdersAsync()
  }, [pathname])
  console.log('orders', orders)
  const router = useRouter()

  return (
    <ScrollView>
      {orders && orders.map((order) => (
        <View className='flex flex-row p-4 justify-between items-center' key={order.id}>
          <View className='text-xl'>
            <Text className='text-xl'>{order.posting?.title}</Text>
            <Text>{order.status}</Text>
          </View>
          {account.type === 'WORKER' && order.posting?.status === 'ACCEPTED' && (
            <TouchableOpacity
              onPress={() => {
                revokeOrderCall({ postingId: order.posting.id })
                router.push('/Home')
              }}
            >
              <Text className='text-xl bg-pink-500 rounded-full px-4 py-2 text-white'>Cancel</Text>
            </TouchableOpacity>
          )}
          {account.type === 'CUSTOMER' && order.status === 'PENDING' && (
            <TouchableOpacity
              onPress={() => {
                completeOrderCall({ postingId: order.posting.id })
                router.push('/Home')
              }}
            >
              <Text className='text-xl bg-pink-500 rounded-full px-4 py-2 text-white'>Complete</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </ScrollView>
  )
}

export default orders
