import React, { useContext, useState } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { loginUser } from '../../API/funcs'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppContext from '../../func/AppContext'
import { Link, Redirect } from 'expo-router'

const onLogin = async ({ setAccount, email, password, type }) => {
  console.log('email', email)
  const result = await loginUser({ email, password, type })
  console.log('result', result)
  if (result?.error) return console.log('error', result?.error)
  await AsyncStorage.setItem('@jwt', result?.token || '')
  setAccount(result?.account)
}

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('CUSTOMER')
  const { setAccount, account } = useContext(AppContext)

  const handleEmailChange = (text) => {
    setEmail(text)
  }

  const handlePasswordChange = (text) => {
    setPassword(text)
  }
  if (account) return <Redirect href='/Home' />
  return (
    <View>
      <TextInput
        className='border-2 rounded-md border-black h-10 m-4 p-2'
        placeholder='Email'
        autoCapitalize='none'
        type='email'
        onChangeText={handleEmailChange}
        value={email}
      />
      <TextInput
        className='border-2 rounded-md border-black h-10 m-4 p-2'
        placeholder='Password'
        type='password'
        secureTextEntry
        onChangeText={handlePasswordChange}
        value={password}
      />
      <Text className='ml-4 text-xl'>Type: {type}</Text>
      <View className='mt-4 flex items-center '>
        <TouchableOpacity onPress={() => setType('WORKER')}>
          <Text className='text-center w-32 mb-4 text-xl bg-pink-500 rounded-full px-4 py-2 text-white'>Worker</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setType('CUSTOMER')}>
          <Text className='text-center w-32 mb-4 text-xl bg-pink-500 rounded-full px-4 py-2 text-white'>Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onLogin({ setAccount, email, password, type })}>
          <Text className='text-center w-32 mb-4 text-xl bg-pink-500 rounded-full px-4 py-2 text-white'>Login</Text>
        </TouchableOpacity>
        <Link className='text-center w-32 mb-4 text-xl bg-pink-500 rounded-full px-4 py-2 text-white' href='/register'>Register</Link>
      </View>

    </View>
  )
}

export default LoginForm
