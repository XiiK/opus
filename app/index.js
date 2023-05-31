import React, { useContext, useEffect } from 'react'
import { getAccount } from '../API/funcs'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppContext from '../func/AppContext'
import { Redirect } from 'expo-router'

export default function index () {
  const { account, setAccount } = useContext(AppContext)
  useEffect(() => {
    const getAccountAsync = async () => {
      const token = await AsyncStorage.getItem('@jwt')
      console.log('token', token)
      if (!token) return
      setAccount(await getAccount())
    }
    getAccountAsync()
  }, [])
  console.log('account', account)
  if (!account) return <Redirect href='/login' />
  else return <Redirect href='/home' />
}
