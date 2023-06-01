import { Stack } from 'expo-router'
import AppWrapper from '../func/AppWrapper'

export default function HomeLayout () {
  return (
    <AppWrapper>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      </Stack>
    </AppWrapper>
  )
}
