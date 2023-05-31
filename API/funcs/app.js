import {
  getAccountQuery, loginUserQuery, registerUserQuery
} from '../definitions'

import { callApi } from '../raw'

export const getAccount = async () => {
  const { getAccount: result } = await callApi({ query: getAccountQuery }) || {}
  return result || null
}

export const loginUser = async ({ email, password, type }) => {
  const { loginUser: result } = await callApi({ query: loginUserQuery, variables: { email, password, type } }) || {}
  return result || null
}

export const registerUser = async ({ email, password, name, type }) => {
  const { registerUser: result } = await callApi({ query: registerUserQuery, variables: { email, password, name, type } }) || {}
  return result || null
}
