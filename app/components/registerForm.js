import React, { useContext, useState } from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import { registerUser } from '../../API/funcs'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppContext from '../../func/AppContext'
import { Link } from 'expo-router'

const onRegister = async ({ setAccount, email, password, type }) => {
  const result = await registerUser({ email, password, type })
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
  return (
    <View>
      <TextInput
        className='border-2 border-black h-7 w-full'
        placeholder='Email'
        type='email'
        onChangeText={handleEmailChange}
        value={email}
      />
      <TextInput
        className='border-2 border-black h-7 w-full'
        placeholder='Password'
        type='password'
        secureTextEntry
        onChangeText={handlePasswordChange}
        value={password}
      />
      <TextInput
        className='border-2 border-black h-7 w-full'
        placeholder='Name'
        type='name'
        onChangeText={handleNameChange}
        value={name}
      />
      <Text>Type: {type}</Text>
      <Button title='Worker' onPress={() => setType('WORKER')} />
      <Button title='Customer' onPress={() => setType('CUSTOMER')} />
      <Button title='Register' onPress={() => onRegister({ setAccount, email, password, type, name })} />
      <Link href='/login'>Login</Link>
    </View>
  )
}

export default RegisterForm
