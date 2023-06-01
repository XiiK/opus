import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

// calls the API with the given query and variables
export const callApi = async ({ query, variables }) => {
  // get the token from the store
  const token = await AsyncStorage.getItem('@jwt')
  const headers = { 'Content-Type': 'application/json' }
  if (token) headers.Authorization = `Bearer ${token}`
  return axios.post('http://localhost:3333', {
    query, variables
  }, { headers })
    .then(result => result?.data?.data || {})
    .catch((error) => {
      console.log('error', error)
      return { error }
    })
}
