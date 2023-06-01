import React, { useContext, useState } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { registerUser } from '../../API/funcs'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppContext from '../../func/AppContext'
import { Link, useRouter } from 'expo-router'

const onRegister = async ({ setAccount, email, password, type, name }) => {
  console.log('email, password', email, password)
  const result = await registerUser({ email, password, type, name })
  console.log('result', result)
  if (result?.error) return console.log('error', result?.error)
  await AsyncStorage.setItem('@jwt', result?.token || '')
  setAccount(result?.account)
}

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [type, setType] = useState('CUSTOMER')
  const { setAccount } = useContext(AppContext)

  const handleEmailChange = (text) => {
    setEmail(text)
  }

  const handlePasswordChange = (text) => {
    setPassword(text)
  }

  const handleNameChange = (text) => {
    setName(text)
  }
  const router = useRouter()

  return (
    <View>
      <TextInput
        className='border-2 rounded-md border-black h-10 m-4 p-2'
        placeholder='Email'
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
      <TextInput
        className='border-2 rounded-md border-black h-10 m-4 p-2'
        placeholder='Name'
        type='name'
        onChangeText={handleNameChange}
        value={name}
      />
      <Text className='ml-4 text-xl'>Type: {type}</Text>
      <View className='mt-4 flex items-center '>
        <TouchableOpacity onPress={() => setType('WORKER')}>
          <Text className='text-center w-32 mb-4 text-xl bg-pink-500 rounded-full px-4 py-2 text-white'>Worker</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setType('CUSTOMER')}>
          <Text className='text-center w-32 mb-4 text-xl bg-pink-500 rounded-full px-4 py-2 text-white'>Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          onRegister({ setAccount, email, password, type, name })
          router.push('/Home')
        }}
        >
          <Text className='text-center w-32 mb-4 text-xl bg-pink-500 rounded-full px-4 py-2 text-white'>Register</Text>
        </TouchableOpacity>
        <Link className='text-center w-32 mb-4 text-xl bg-pink-500 rounded-full px-4 py-2 text-white' href='/login'>Login</Link>
      </View>
    </View>
  )
}

export default RegisterForm
