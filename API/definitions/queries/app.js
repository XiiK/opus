
export const getAccountQuery = `
query GetAccount {
  getAccount {
    type
    userId
    email
    name
  }
}`

export const loginUserQuery = `
mutation LoginUser($email: String!, $password: ID!, $type: AccountType!) {
  loginUser(email: $email, password: $password, type: $type) {
    token
    account {
      type
      userId
      email
      name
    }
  }
}`

export const registerUserQuery = `
mutation RegisterUser($email: String!, $password: ID!, $name: String!, $type: AccountType!) {
  registerUser(email: $email, password: $password, name: $name, type: $type) {
    token
    account {
      type
      userId
      email
      name
    }
  }
}`

export const getPostingsCustomerQuery = `
query GetPostingsCustomer {
  getPostingsCustomer {
    id
    title
    createdAt
    status
  }
}`

export const getPostingsWorkerQuery = `
query GetPostingsWorker($status: PostingStatus) {
  getPostingsWorker(status: $status) {
    id
    title
    createdAt
    status
  }
}`

export const createPostingQuery = `
mutation CreatePosting($posting: PostingPayload!) {
  createPosting(posting: $posting) {
    id
    title
    createdAt
    status
  }
}`

export const getOrdersQuery = `
query GetOrders($status: OrderStatus) {
  getOrders(status: $status) {
    id
    postingId
    posting {
      id
      title
      createdAt
      status
    }
    status
    createdAt
  }
}`

export const acceptOrderQuery = `
mutation AcceptOrder($postingId: ID!) {
  acceptOrder(postingId: $postingId) {
    id
    postingId
    posting {
      id
      title
      createdAt
      status
    }
    status
    createdAt
  }
}`

export const revokeOrderQuery = `
mutation RevokeOrder($postingId: ID!) {
  revokeOrder(postingId: $postingId) {
    id
    postingId
    posting {
      id
      title
      createdAt
      status
    }
    status
    createdAt
  }
}`

export const completeOrderQuery = `
mutation CompleteOrder($postingId: ID!) {
  completeOrder(postingId: $postingId) {
    id
    postingId
    posting {
      id
      title
      createdAt
      status
    }
    status
    createdAt
  }
}`
