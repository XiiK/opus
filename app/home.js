import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppContext from '../func/AppContext'
import { Redirect } from 'expo-router'

const logOut = async (setAccount) => {
  await AsyncStorage.removeItem('@jwt')
  setAccount(null)
}

const Home = () => {
  const { setAccount, account } = useContext(AppContext)
  if (!account) return <Redirect href='/login' />
  return (
    <View>
      <Text>Home</Text>
      <Button title='Log Out' onPress={() => logOut(setAccount)} />
    </View>
  )
}

export default Home
