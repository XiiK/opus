import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen () {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [navigation])

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}
