import React, { useContext, useState } from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import { loginUser } from '../../API/funcs'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppContext from '../../func/AppContext'
import { Link, Redirect } from 'expo-router'

const onLogin = async ({ setAccount, email, password, type, name }) => {
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
  if (account) return <Redirect href='/home' />
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
      <Text>Type: {type}</Text>
      <Button title='Worker' onPress={() => setType('WORKER')} />
      <Button title='Customer' onPress={() => setType('CUSTOMER')} />
      <Button title='Login' onPress={() => onLogin({ setAccount, email, password, type })} />
      <Link href='/register'>Register</Link>
    </View>
  )
}

export default LoginForm
