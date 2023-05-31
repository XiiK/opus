
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
