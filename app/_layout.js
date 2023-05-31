import { Stack } from 'expo-router'
import AppWrapper from '../func/AppWrapper'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAccount } from '../API/funcs'

export default function HomeLayout () {
  return (
    <AppWrapper>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: 'blue'
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen
          name='index'
          options={{
            title: 'Welcome'
          }}
        />
      </Stack>
    </AppWrapper>
  )
}
