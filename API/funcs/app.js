import {
  getAccountQuery,
  loginUserQuery,
  registerUserQuery,
  getPostingsCustomerQuery,
  getPostingsWorkerQuery,
  createPostingQuery,
  getOrdersQuery,
  acceptOrderQuery,
  revokeOrderQuery,
  completeOrderQuery
} from '../definitions'

import { callApi } from '../raw'

export const getAccount = async () => {
  const { getAccount: result } = await callApi({ query: getAccountQuery }) || {}
  return result || null
}

export const loginUser = async ({ email, password, type }) => {
  console.log('email, password', email, password)
  const { loginUser: result } = await callApi({ query: loginUserQuery, variables: { email, password, type } }) || {}
  return result || null
}

export const registerUser = async ({ email, password, name, type }) => {
  const { registerUser: result } = await callApi({ query: registerUserQuery, variables: { email, password, name, type } }) || {}
  return result || null
}

export const getPostingsCustomer = async () => {
  const { getPostingsCustomer: result } = await callApi({ query: getPostingsCustomerQuery }) || {}
  return result || null
}

export const getPostingsWorker = async ({ status } = {}) => {
  const { getPostingsWorker: result } = await callApi({ query: getPostingsWorkerQuery, variables: { status } }) || {}
  return result || null
}

export const createPosting = async ({ posting }) => {
  const { createPosting: result } = await callApi({ query: createPostingQuery, variables: { posting } }) || {}
  return result || null
}

export const getOrders = async ({ status } = {}) => {
  const { getOrders: result } = await callApi({ query: getOrdersQuery, variables: { status } }) || {}
  return result || null
}

export const acceptOrder = async ({ postingId }) => {
  console.log('postingId', postingId)
  const { acceptOrder: result } = await callApi({ query: acceptOrderQuery, variables: { postingId } }) || {}
  return result || null
}

export const revokeOrder = async ({ postingId }) => {
  console.log('postingId', postingId)
  const { revokeOrder: result } = await callApi({ query: revokeOrderQuery, variables: { postingId } }) || {}
  return result || null
}

export const completeOrder = async ({ postingId }) => {
  console.log('postingId', postingId)
  const { completeOrder: result } = await callApi({ query: completeOrderQuery, variables: { postingId } }) || {}
  return result || null
}
