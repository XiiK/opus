import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppContext from '../../func/AppContext'
import { acceptOrder, getPostingsCustomer, getPostingsWorker } from '../../API/funcs'
import { Link, Redirect, usePathname, useRouter } from 'expo-router'

const logOut = async (setAccount) => {
  await AsyncStorage.removeItem('@jwt')
  setAccount(null)
}

const getPostings = async (account) => {
  if (account.type === 'CUSTOMER') {
    const result = await getPostingsCustomer()
    // console.log('result', result)
    return result
  } else return await getPostingsWorker({ status: 'CREATED' })
}

const acceptOrderCall = async ({ postingId }) => {
  const result = await acceptOrder({ postingId })
  return result
}

const Home = () => {
  const { setAccount, account } = useContext(AppContext)
  const [postings, setPostings] = useState([])
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const getPostingsAsync = async () => {
      const result = await getPostings(account)
      setPostings(result)
    }
    getPostingsAsync()
  }, [pathname])
  console.log('postings', postings)
  if (!account) return <Redirect href='/login' />
  console.log('pathname', pathname)
  return (
    <SafeAreaView>
      <View className='flex flex-row p-4 justify-between items-center'>
        <Text className='text-xl'>{account.post?.name}</Text>
        <Text className='text-xl'>{account?.type}</Text>
        <TouchableOpacity className='bg-pink-500 px-4 py-2' onPress={() => logOut(setAccount)}>
          <Text className='text-white text-xl'>Log Out</Text>
        </TouchableOpacity>
      </View>
      {account?.type === 'CUSTOMER' && (
        <View className='rounded flex justify-center items-center'>
          <Link className='text-xl bg-pink-500 rounded-full px-4 py-2 text-white' href='/posting'>+</Link>
        </View>
      )}
      <ScrollView className='mb-32 border-t-2 border-pink-500 pt-3'>
        {postings && postings.map((posting) => (
          <View className='flex flex-row justify-between' key={posting.id}>
            <View>
              <Text className='text-xl ml-5'>{posting.title}</Text>
              <Text className='ml-5 mb-3'>{posting.status}</Text>
            </View>
            {account.type === 'WORKER' && (
              <TouchableOpacity
                className='mx-8' onPress={() => {
                  acceptOrderCall({ postingId: posting.id })
                  router.push('/Orders')
                }}
              >
                <Text className='text-xl bg-pink-500 rounded-full px-4 py-2 text-white'>Accept</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
